import { ExampleResponseDto } from '@/application/dtos/example-response.dto';
import { IExample } from '@/domain/interfaces/example.interface';

export class Example {
  public async execute(data: IExample): Promise<ExampleResponseDto> {
    //return await this.exampleRepository.find(data.id);
    return {
      id: data.id,
      name: 'name'
    };
  }
}
