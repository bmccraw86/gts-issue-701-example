"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const signingKey = new utils_1.RsKmsSigningKey("entitlement-signing-key", utils_1.RsKmsKeyType.Rsa2048)
    .WithDescription("The key used by the Entitlements service to sign entitlement tokens.");
const domainsTable = new utils_1.RsDynamoDbTable("entmnt-domains", "id")
    .WithProvisionedBilling(2, 1);
//# sourceMappingURL=index.js.map