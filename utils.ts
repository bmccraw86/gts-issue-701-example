export class RsKmsSigningKey {
  private keyName: string;
  private type: RsKmsKeyType;
  private description: string;

  constructor(keyName: string, type: RsKmsKeyType) {
    this.type = type;
    this.keyName = keyName;
    this.description = '';
  }

  WithDescription(description: string) {
    this.description = description;
    return this;
  }
}

export class RsDynamoDbTable {
  private name: string;
  private hashKey: string;
  private readCapacity: number;
  private writeCapacity: number;

  constructor(name: string, hashKey: string) {
    this.name = name;
    this.hashKey = hashKey;
    this.readCapacity = 1;
    this.writeCapacity = 1;
  }

  WithProvisionedBilling(
    readCapacity: number,
    writeCapacity: number
  ): RsDynamoDbTable {
    this.readCapacity = readCapacity;
    this.writeCapacity = writeCapacity;
    return this;
  }
}

export enum RsKmsKeyType {
  /**
   * RSA asymmetric 2048-bit key.
   */
  Rsa2048 = 'RSA_2048',
}
