import { sharedParticipants } from './../src/shared/sharedParticipants';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  for (const participant of sharedParticipants) {
    await prisma.organisation.create({
      data: {
        OrganisationId: JSON.stringify(participant.OrganisationName),
        OrganisationName: JSON.stringify(participant.OrganisationName),
        LegalEntityName: JSON.stringify(participant.LegalEntityName),
        CreatedOn: JSON.stringify(Date),
        CountryOfRegistration: JSON.stringify(
          participant.CountryOfRegistration,
        ),
        Status: 'ACTIVE',
        CompanyRegister: JSON.stringify(participant.CompanyRegister),
        Tag: JSON.stringify(participant.Tag),
        Size: JSON.stringify(participant.Size),
        RegistrationNumber: JSON.stringify(participant.RegistrationNumber),
        RegistrationId: JSON.stringify(participant.RegistrationId),
        RegisteredName: JSON.stringify(participant.RegisteredName),
        AddressLine1: JSON.stringify(participant.AddressLine1),
        AddressLine2: JSON.stringify(participant.AddressLine2),
        City: JSON.stringify(participant.City),
        Postcode: JSON.stringify(participant.Postcode),
        Country: JSON.stringify(participant.Country),
        ParentOrganisationReference: JSON.stringify(
          participant.ParentOrganisationReference,
        ),
        /* AuthorisationServers: {
          create: [
            {
              AuthorisationServerId: JSON.stringify(participant.AuthorisationServerId),
              AutoRegistrationSupported: JSON.stringify(participant.AutoRegistrationSupported),
              AutoRegistrationNotificationWebhook: JSON.stringify(
                participant.AutoRegistrationNotificationWebhook,
              ),
              SupportsCiba: JSON.stringify(participant.SupportsCiba),
              SupportsDCR: JSON.stringify(participant.SupportsDCR),
              SupportsRedirect: JSON.stringify(participant.SupportsRedirect),
              AuthorisationServerCertifications: JSON.stringify(
                participant.AuthorisationServerCertifications,
              ),
              CustomerFriendlyDescription: JSON.stringify(participant.CustomerFriendlyDescription),
              CustomerFriendlyLogoUri: JSON.stringify(participant.CustomerFriendlyLogoUri),
              CustomerFriendlyName: JSON.stringify(participant.CustomerFriendlyName),
              DeveloperPortalUri: JSON.stringify(participant.DeveloperPortalUri),
              TermsOfServiceUri: JSON.stringify(participant.TermsOfServiceUri),
              NotificationWebhookAddedDate: JSON.stringify(participant.NotificationWebhookAddedDate),
              OpenIDDiscoveryDocument: JSON.stringify(participant.OpenIDDiscoveryDocument),
              Issuer: JSON.stringify(participant.Issuer),
              PayloadSigningCertLocationUri: JSON.stringify(
                participant.PayloadSigningCertLocationUri,
              ),
              ParentAuthorisationServerId: JSON.stringify(participant.ParentAuthorisationServerId),
              DeprecatedDate: JSON.stringify(participant.DeprecatedDate),
              RetirementDate: JSON.stringify(participant.RetirementDate),
              SupersededByAuthorisationServerId: JSON.stringify(
                participant.SupersededByAuthorisationServerId,
              ),
            },
          ],
        }, */
      },
    });
    console.log({ participant });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
