import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const apiDiscoveryEndPointsData: Prisma.ApiDiscoveryEndPointsCreateInput[] = [
  {
    Id: '',
    ApiEndPoint: '',
    ApiResourceId: '',
  },
];

const apiResourcesData: Prisma.ApiResourcesCreateInput[] = [
  {
    Id: '',
    ApiVersion: '',
    FamilyComplete: '',
    ApiFamilyType: '',
    Phase: '',
  },
];

const authorisationServersData: Prisma.AuthorisationServersCreateInput[] = [
  {
    Id: '',
    CustomerFriendlyDescription: '',
    CustomerFriendlyLogoUri: '',
    CustomerFridenlyName: '',
    DeveloperPortalUri: '',
    CustomerFriendly: '',
  },
];

const organisationsData: Prisma.OrganisationsCreateInput[] = [
  {
    Id: '',
    Status: 'ACTIVE',
    OrganisationName: '',
    CreatedOn: '',
    LegalEntiryName: '',
    CountryOfRegistration: '',
    CompanyRegister: '',
    Tag: '',
    Size: '',
    RegistrationNumber: '',
    RegistrationId: '',
    AddressLine1: '',
    AddressLine2: '',
    City: '',
    Postcode: '',
    Country: '',
    Order: '',
    ParentOrganisationReference: '',
  },
];

const orgDomainRoleClaimsData: Prisma.OrgDomainRoleClaimsCreateInput[] = [
  {
    Id: '',
    Status: 'ACTIVE',
    AuthorisationDomain: '',
    Role: '',
  },
];

async function apiDiscoveryEndPoints() {
  console.log(`Start seeding ...`);
  for (const u of apiDiscoveryEndPointsData) {
    const apiDiscoveryEndPoints = await prisma.apiDiscoveryEndPoints.create({
      data: u,
    });
    console.log(
      `Created apiDiscoveryEndPoints with id: ${apiDiscoveryEndPoints.Id}`,
    );
  }
  console.log(`Seeding finished.`);
}

async function authorisationServers() {
  console.log(`Start seeding ...`);
  for (const u of authorisationServersData) {
    const authorisationServers = await prisma.authorisationServers.create({
      data: u,
    });
    console.log(
      `Created authorisationServers with id: ${authorisationServers.Id}`,
    );
  }
  console.log(`Seeding finished.`);
}

async function apiResources() {
  console.log(`Start seeding ...`);
  for (const u of apiResourcesData) {
    const apiResources = await prisma.apiResources.create({
      data: u,
    });
    console.log(`Created apiResources with id: ${apiResources.Id}`);
  }
  console.log(`Seeding finished.`);
}

async function organisations() {
  console.log(`Start seeding ...`);
  for (const u of organisationsData) {
    const organisations = await prisma.organisations.create({
      data: u,
    });
    console.log(`Created organisations with id: ${organisations.Id}`);
  }
  console.log(`Seeding finished.`);
}

async function orgDomainRoleClaims() {
  console.log(`Start seeding ...`);
  for (const u of orgDomainRoleClaimsData) {
    const orgDomainRoleClaims = await prisma.orgDomainRoleClaims.create({
      data: u,
    });
    console.log(
      `Created   orgDomainRoleClaims with id: ${orgDomainRoleClaims.Id}`,
    );
  }
  console.log(`Seeding finished.`);
}

apiDiscoveryEndPoints()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

apiResources()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

authorisationServers()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

organisations()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

orgDomainRoleClaims()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
