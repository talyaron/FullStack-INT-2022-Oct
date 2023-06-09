//Model = data;

class Picture {
  id: string;
  constructor(public imgUrl: string) {
    this.id = uid();
  }
}

const pictures: Picture[] = [];
