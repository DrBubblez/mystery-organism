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

    compareDNA(obj) { // this method compares the dna of two specimens and returns a percentage of their similarity
      let total = 0; 
      for (let i = 0; i < obj.dna.length; i++) {
        console.log(obj.dna[i] + ' & ' + this.dna[i]);
        if (obj.dna[i] === this.dna[i]) { // will add to the total if the dna bases are the same
          total++;
        };
      };
      total = (total / this.dna.length) * 100; // final calculation for the percentage

      console.log(`Specimens are ${total.toFixed()}% identical`);
    },

    willLikelySurvive() { // this method will return true or false if the dna strand is 60% or more C or G bases
      let total = 0; 
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') { // will add to the total if the dna bases are C or G
          total++;
        };
      };
      total = (total / this.dna.length) * 100;
      if (total >= 60) { // if the percentage of C or G bases is 60% or more, return true. If not, return false
        return true;
      } else {
        return false
      };
    },
  }
};

let specimen1 = pAequorFactory(1, mockUpStrand());
let specimen2 = pAequorFactory(2, mockUpStrand());
