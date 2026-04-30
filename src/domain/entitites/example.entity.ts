import { IExample } from '@/domain/interfaces/example.interface';

export class Example implements IExample {
  id: string;
  age?: number;

  constructor(data: IExample) {
    this.id = data.id;
    this.age = data?.age || undefined;
  }

  public isOfLegalAge(): boolean {
    const professionalIsOfLegalAge = this.age >= 18;

    return professionalIsOfLegalAge;
  }
}
