export declare class RsKmsSigningKey {
    private keyName;
    private type;
    constructor(keyName: string, type: RsKmsKeyType);
    WithDescription(description: string): this;
}
export declare class RsDynamoDbTable {
    private name;
    private hashKey;
    constructor(name: string, hashKey: string);
    WithProvisionedBilling(readCapacity: number, writeCapacity: number): RsDynamoDbTable;
}
export declare enum RsKmsKeyType {
    /**
     * RSA asymmetric 2048-bit key.
     */
    Rsa2048 = "RSA_2048"
}
