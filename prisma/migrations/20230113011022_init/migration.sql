-- CreateEnum
CREATE TYPE "OrganisationStatus" AS ENUM ('ACTIVE', 'IN_PROGRESS', 'DONE');

-- CreateEnum
CREATE TYPE "OrgDomainClaimStatus" AS ENUM ('ACTIVE', 'IN_PROGRESS', 'DONE');

-- CreateEnum
CREATE TYPE "OrgDomainRoleClaimStatus" AS ENUM ('ACTIVE', 'IN_PROGRESS', 'DONE');

-- CreateTable
CREATE TABLE "Organisation" (
    "OrganisationId" TEXT NOT NULL,
    "OrganisationName" TEXT NOT NULL,
    "CreatedOn" TIMESTAMP(3) NOT NULL,
    "LegalEntityName" TEXT NOT NULL,
    "CountryOfRegistration" TEXT NOT NULL,
    "CompanyRegister" TEXT NOT NULL,
    "Tag" TEXT[],
    "Size" TEXT NOT NULL,
    "RegistrationNumber" TEXT NOT NULL,
    "RegistrationId" TEXT NOT NULL,
    "RegisteredName" TEXT NOT NULL,
    "AddressLine1" TEXT NOT NULL,
    "AddressLine2" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "Postcode" TEXT NOT NULL,
    "Country" TEXT NOT NULL,
    "ParentOrganisationReference" TEXT NOT NULL,
    "Status" "OrganisationStatus" NOT NULL,

    CONSTRAINT "Organisation_pkey" PRIMARY KEY ("OrganisationId")
);

-- CreateTable
CREATE TABLE "AuthorisationServer" (
    "AuthorisationServerId" TEXT NOT NULL,
    "AutoRegistrationSupported" BOOLEAN NOT NULL,
    "AutoRegistrationNotificationWebhook" TEXT NOT NULL,
    "SupportsCiba" BOOLEAN NOT NULL,
    "SupportsDCR" BOOLEAN NOT NULL,
    "SupportsRedirect" BOOLEAN NOT NULL,
    "AuthorisationServerCertifications" TEXT[],
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
    "AuthorisationDomain" TEXT NOT NULL,
    "Role" TEXT NOT NULL,
    "Authorisations" TEXT[],
    "RegistrationId" TEXT NOT NULL,
    "Status" "OrgDomainRoleClaimStatus" NOT NULL,

    CONSTRAINT "OrgDomainRoleClaim_pkey" PRIMARY KEY ("RegistrationId")
);

-- AddForeignKey
ALTER TABLE "AuthorisationServer" ADD CONSTRAINT "AuthorisationServer_AuthorisationServerId_fkey" FOREIGN KEY ("AuthorisationServerId") REFERENCES "Organisation"("OrganisationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "APIResource" ADD CONSTRAINT "APIResource_ApiResourceId_fkey" FOREIGN KEY ("ApiResourceId") REFERENCES "AuthorisationServer"("AuthorisationServerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "APIDiscoveryEndpoint" ADD CONSTRAINT "APIDiscoveryEndpoint_ApiDiscoveryId_fkey" FOREIGN KEY ("ApiDiscoveryId") REFERENCES "APIResource"("ApiResourceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgDomainClaim" ADD CONSTRAINT "OrgDomainClaim_RegistrationId_fkey" FOREIGN KEY ("RegistrationId") REFERENCES "Organisation"("OrganisationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgDomainRoleClaim" ADD CONSTRAINT "OrgDomainRoleClaim_RegistrationId_fkey" FOREIGN KEY ("RegistrationId") REFERENCES "Organisation"("OrganisationId") ON DELETE RESTRICT ON UPDATE CASCADE;
