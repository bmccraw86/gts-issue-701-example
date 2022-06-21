import {RsDynamoDbTable, RsKmsKeyType, RsKmsSigningKey} from './utils';

main();

function main() {
  const signingKey = new RsKmsSigningKey("entitlement-signing-key", RsKmsKeyType.Rsa2048)
    .WithDescription("The key used by the Entitlements service to sign entitlement tokens.");

  const domainsTable = new RsDynamoDbTable("entmnt-domains", "id")
    .WithProvisionedBilling(2, 1);
}
