"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RsKmsKeyType = exports.RsDynamoDbTable = exports.RsKmsSigningKey = void 0;
class RsKmsSigningKey {
    constructor(keyName, type) {
        this.type = type;
        this.keyName = keyName;
    }
    WithDescription(description) {
        return this;
    }
}
exports.RsKmsSigningKey = RsKmsSigningKey;
class RsDynamoDbTable {
    constructor(name, hashKey) {
        this.name = name;
        this.hashKey = hashKey;
    }
    WithProvisionedBilling(readCapacity, writeCapacity) {
        return this;
    }
}
exports.RsDynamoDbTable = RsDynamoDbTable;
var RsKmsKeyType;
(function (RsKmsKeyType) {
    /**
     * RSA asymmetric 2048-bit key.
     */
    RsKmsKeyType["Rsa2048"] = "RSA_2048";
})(RsKmsKeyType = exports.RsKmsKeyType || (exports.RsKmsKeyType = {}));
//# sourceMappingURL=utils.js.map