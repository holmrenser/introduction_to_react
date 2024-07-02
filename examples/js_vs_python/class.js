class Sequence {
  constructor(header, seq) {
    this.header = header;
    this.seq = seq;
  }

  reverse() {
    return new Sequence(
      this.header,
      this.seq.split("").reverse().join("")
    );
  }
}

const seq = new Sequence("test", "ACGTA");
seq.reverse();
// Object { header: "test", seq: "ATGCA" }
