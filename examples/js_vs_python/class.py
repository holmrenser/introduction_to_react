class Sequence:
    def __init__(self, header, seq):
        self.header = header
        self.seq = seq

    def reverse(self):
        return Sequence(
            self.header,
            self.seq[::-1]
        )


seq = Sequence("test", "ACGTA")
seq.reverse()
# <__main__.Sequence object at 0x1011f5750>
