-- CreateEnum
CREATE TYPE "OrganisationStatus" AS ENUM ('ACTIVE', 'IN_PROGRESS', 'DONE');

-- CreateEnum
CREATE TYPE "OrgDomainClaimStatus" AS ENUM ('ACTIVE', 'IN_PROGRESS', 'DONE');

-- CreateEnum
CREATE TYPE "OrgDomainRoleClaimStatus" AS ENUM ('ACTIVE', 'IN_PROGRESS', 'DONE');

-- CreateTable
CREATE TABLE "Organisations" (
    "OrganisationId" TEXT NOT NULL,
    "Status" "OrganisationStatus" NOT NULL DEFAULT 'ACTIVE',
    "OrganisationName" TEXT NOT NULL,
    "CreatedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "LegalEntityName" TEXT NOT NULL,
    "CountryOfRegistration" TEXT NOT NULL,
    "CompanyRegister" TEXT NOT NULL,
    "Tag" TEXT NOT NULL,
    "Size" TEXT,
    "RegistrationNumber" TEXT NOT NULL,
    "RegistrationId" TEXT NOT NULL,
    "RegisteredName" TEXT NOT NULL,
    "AddressLine1" TEXT NOT NULL,
    "AddressLine2" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "Postcode" TEXT NOT NULL,
    "Country" TEXT NOT NULL,
    "Order" TEXT,
    "ParentOrganisationReference" TEXT,

    CONSTRAINT "Organisations_pkey" PRIMARY KEY ("OrganisationId")
);

-- CreateTable
CREATE TABLE "AuthorisationServer" (
    "AuthorisationServerId" TEXT NOT NULL,
    "AutoRegistrationSupported" BOOLEAN NOT NULL,
    "AutoRegistrationNotificationWebhook" TEXT NOT NULL,
    "SupportsCiba" BOOLEAN NOT NULL,
    "SupportsDCR" BOOLEAN NOT NULL,
    "CustomerFriendlyDescription" TEXT NOT NULL,
    "CustomerFriendlyLogoUri" TEXT NOT NULL,
    "CustomerFriendlyName" TEXT NOT NULL,
    "DeveloperPortalUri" TEXT NOT NULL,
    "TermsOfServiceUri" TEXT NOT NULL,
    "NotificationWebhookAddedDate" TEXT NOT NULL,
    "OpenIDDiscoveryDocument" TEXT NOT NULL,
    "Issuer" TEXT NOT NULL,
    "PayloadSigningCertLocationUri" TEXT NOT NULL,
    "ParentAuthorisationServerId" TEXT NOT NULL,
    "DeprecatedDate" TEXT NOT NULL,
    "RetirementDate" TEXT NOT NULL,
    "SupersededByAuthorisationServerId" TEXT NOT NULL,

    CONSTRAINT "AuthorisationServer_pkey" PRIMARY KEY ("AuthorisationServerId")
);

-- CreateTable
CREATE TABLE "APIResource" (
    "ApiResourceId" TEXT NOT NULL,
    "ApiVersion" TEXT NOT NULL,
    "FamilyComplete" BOOLEAN NOT NULL,
    "ApiCertificationUri" TEXT NOT NULL,
    "CertificationStatus" TEXT NOT NULL,
    "CertificationStartDate" TEXT NOT NULL,
    "CertificationExpirationDate" TEXT NOT NULL,
    "ApiFamilyType" TEXT NOT NULL,

    CONSTRAINT "APIResource_pkey" PRIMARY KEY ("ApiResourceId")
);

-- CreateTable
CREATE TABLE "APIDiscoveryEndpoint" (
    "ApiDiscoveryId" TEXT NOT NULL,
    "ApiEndpoint" TEXT NOT NULL,

    CONSTRAINT "APIDiscoveryEndpoint_pkey" PRIMARY KEY ("ApiDiscoveryId")
);

-- CreateTable
CREATE TABLE "OrgDomainClaim" (
    "AuthorisationDomainName" TEXT NOT NULL,
    "AuthorityName" TEXT NOT NULL,
    "RegistrationId" TEXT NOT NULL,
    "Status" "OrgDomainClaimStatus" NOT NULL,

    CONSTRAINT "OrgDomainClaim_pkey" PRIMARY KEY ("RegistrationId")
);

-- CreateTable
CREATE TABLE "OrgDomainRoleClaim" (
    "Status" "OrgDomainRoleClaimStatus" NOT NULL,
    "AuthorisationDomain" TEXT NOT NULL,
    "Role" TEXT NOT NULL,
    "RegistrationId" TEXT NOT NULL,

    CONSTRAINT "OrgDomainRoleClaim_pkey" PRIMARY KEY ("RegistrationId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Organisations_RegisteredName_key" ON "Organisations"("RegisteredName");

-- AddForeignKey
ALTER TABLE "AuthorisationServer" ADD CONSTRAINT "AuthorisationServer_TermsOfServiceUri_fkey" FOREIGN KEY ("TermsOfServiceUri") REFERENCES "Organisations"("OrganisationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "APIResource" ADD CONSTRAINT "APIResource_ApiResourceId_fkey" FOREIGN KEY ("ApiResourceId") REFERENCES "AuthorisationServer"("AuthorisationServerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "APIDiscoveryEndpoint" ADD CONSTRAINT "APIDiscoveryEndpoint_ApiEndpoint_fkey" FOREIGN KEY ("ApiEndpoint") REFERENCES "APIResource"("ApiResourceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgDomainClaim" ADD CONSTRAINT "OrgDomainClaim_RegistrationId_fkey" FOREIGN KEY ("RegistrationId") REFERENCES "Organisations"("OrganisationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgDomainRoleClaim" ADD CONSTRAINT "OrgDomainRoleClaim_RegistrationId_fkey" FOREIGN KEY ("RegistrationId") REFERENCES "Organisations"("OrganisationId") ON DELETE RESTRICT ON UPDATE CASCADE;
