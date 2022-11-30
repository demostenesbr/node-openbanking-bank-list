-- CreateEnum
CREATE TYPE "OrganisationStatus" AS ENUM ('ACTIVE', 'IN_PROGRESS', 'DONE');

-- CreateEnum
CREATE TYPE "OrgDomainRoleClaimStatus" AS ENUM ('ACTIVE', 'IN_PROGRESS', 'DONE');

-- CreateTable
CREATE TABLE "Organisations" (
    "Id" SERIAL NOT NULL,
    "Status" "OrganisationStatus" NOT NULL DEFAULT 'ACTIVE',
    "OrganisationName" TEXT NOT NULL,
    "CreatedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "LegalEntiryName" TEXT NOT NULL,
    "CountryRegistration" TEXT NOT NULL,
    "Tag" TEXT NOT NULL,
    "Size" TEXT NOT NULL,
    "RegistrationNumber" TEXT NOT NULL,
    "RegistrationId" TEXT NOT NULL,
    "AddressLine1" TEXT NOT NULL,
    "AddressLine2" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "Postcode" TEXT NOT NULL,
    "Country" TEXT NOT NULL,
    "Order" TEXT NOT NULL,
    "ParentOrganisationReference" TEXT NOT NULL,

    CONSTRAINT "Organisations_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "AuthorisationServers" (
    "Id" SERIAL NOT NULL,
    "OrganisationId" INTEGER NOT NULL,
    "CustomerFriendlyDescription" TEXT NOT NULL,
    "CustomerFriendlyLogoUri" TEXT NOT NULL,
    "CustomerFridenlyName" TEXT NOT NULL,
    "DeveloperPortalUri" TEXT NOT NULL,
    "CustomerFriendly" TEXT NOT NULL,

    CONSTRAINT "AuthorisationServers_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "OrgDomainRoleClaims" (
    "Id" SERIAL NOT NULL,
    "OrganisationId" INTEGER NOT NULL,
    "Status" "OrgDomainRoleClaimStatus",
    "AuthorisationDomain" TEXT NOT NULL,
    "Role" TEXT NOT NULL,

    CONSTRAINT "OrgDomainRoleClaims_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "ApiResources" (
    "Id" SERIAL NOT NULL,
    "AuthorisationServerId" INTEGER NOT NULL,
    "ApiVersion" BOOLEAN NOT NULL,
    "FamilyComplete" TEXT NOT NULL,
    "ApiFamilyType" TEXT NOT NULL,
    "Phase" TEXT NOT NULL,

    CONSTRAINT "ApiResources_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "ApiDiscoveryEndPoints" (
    "Id" SERIAL NOT NULL,
    "ApiResourceId" INTEGER NOT NULL,
    "ApiEndPoint" TEXT NOT NULL,

    CONSTRAINT "ApiDiscoveryEndPoints_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AuthorisationServers_OrganisationId_key" ON "AuthorisationServers"("OrganisationId");

-- CreateIndex
CREATE UNIQUE INDEX "OrgDomainRoleClaims_OrganisationId_key" ON "OrgDomainRoleClaims"("OrganisationId");

-- CreateIndex
CREATE UNIQUE INDEX "ApiResources_AuthorisationServerId_key" ON "ApiResources"("AuthorisationServerId");

-- CreateIndex
CREATE UNIQUE INDEX "ApiDiscoveryEndPoints_ApiResourceId_key" ON "ApiDiscoveryEndPoints"("ApiResourceId");

-- AddForeignKey
ALTER TABLE "AuthorisationServers" ADD CONSTRAINT "AuthorisationServers_OrganisationId_fkey" FOREIGN KEY ("OrganisationId") REFERENCES "Organisations"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgDomainRoleClaims" ADD CONSTRAINT "OrgDomainRoleClaims_OrganisationId_fkey" FOREIGN KEY ("OrganisationId") REFERENCES "Organisations"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiResources" ADD CONSTRAINT "ApiResources_AuthorisationServerId_fkey" FOREIGN KEY ("AuthorisationServerId") REFERENCES "AuthorisationServers"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiDiscoveryEndPoints" ADD CONSTRAINT "ApiDiscoveryEndPoints_ApiResourceId_fkey" FOREIGN KEY ("ApiResourceId") REFERENCES "ApiResources"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
