import { sharedParticipants } from './../src/shared/sharedParticipants';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  for (const openbanking of sharedParticipants) {
    await prisma.organisation.create({
      data: {
        OrganisationName: JSON.stringify(openbanking.OrganisationName),
        LegalEntityName: JSON.stringify(openbanking.LegalEntityName),
        CountryOfRegistration: JSON.stringify(
          openbanking.CountryOfRegistration,
        ),
        CompanyRegister: JSON.stringify(openbanking.CompanyRegister),
        Tag: JSON.stringify(openbanking.Tag),
        Size: JSON.stringify(openbanking.Size),
        RegistrationNumber: JSON.stringify(openbanking.RegistrationNumber),
        RegistrationId: JSON.stringify(openbanking.RegistrationId),
        RegisteredName: JSON.stringify(openbanking.RegisteredName),
        AddressLine1: JSON.stringify(openbanking.AddressLine1),
        AddressLine2: JSON.stringify(openbanking.AddressLine2),
        City: JSON.stringify(openbanking.City),
        Postcode: JSON.stringify(openbanking.Postcode),
        Country: JSON.stringify(openbanking.Country),
        ParentOrganisationReference: JSON.stringify(
          openbanking.ParentOrganisationReference,
        ),
      },
    });
    console.log({ openbanking });
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
