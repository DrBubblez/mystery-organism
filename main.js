// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num, // specimen number
    dna: arr, // dna strand
    
    mutate() { // this method will randomly change one base in the dna strand to a different base
      const index = Math.floor(Math.random() * 15);
      let newBase = returnRandBase();
      
      while (this.dna[index] === newBase) { // ensures the new base isn't the same as it was
        newBase = returnRandBase();
      }
      
      this.dna[index] = newBase;
      
      return this.dna;
    },

  }
};

//test = pAequorFactory(1, mockUpStrand());