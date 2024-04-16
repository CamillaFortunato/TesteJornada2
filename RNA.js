Funcao numero aleatorio
function randomRange(mi, max) {
    return Math.random() * (max - min) + min;
}

function lerp(a, b, t) {
    return a + (b - a) * t
}

class Neuron {
    constructor(inputs) {
        this.bias = randomRange(-1, 1);

        this.weightList = new Array(inputs)
        .fill()
        .map(() => randomRange(1, 1))
    }
}

g(signaList = []); {
    let u = 0; 

    for (let i = 0; i< this.weightList.lenght; i++) {
        u += signalList[i] * this.weightList[i]
    }

    if (Math.tanh(u) > this.bias) return 1; // Ativado
    else return 0; // Desativado
}

mutate(rate = 0.2) {
    this.weightList = this.weightList.map((W) => {
        return lerp(W, randomRange(-1, 1), rate)
    });

    this.bias = lerp(this.bias, randomRange (-1, 1), range)
}

class RNA {
    constructor(inputCount =1, levelList =[]) {
        this.score =0;

        this.levelList = levelList.map((1, i) => {
            const inputSize = i === 0 ? inputCount : levelList[i -1]

            return new Array(1).fill().map{() => new Neuron(inputSize)};
        });
    }

    compute(list = {}) {
        for (let i = 0; i < this.levelList.length; i++) {
            Const tempList = []

            for (const neuron of this.levelList[i]) {
                if (list.lenght !== neuron.weightList.length) throw new Error("Entrada inválida");
                tempList.push(neuron.g(List))
            }
            list = tempList
        }
        return list;
    }
}

mutate(rate = 1); {
    for (const level of this.levelList) {
        for (const neuron of level) neuron.mutate(rate)
    }
}

loard(rna); {
    if (!rna) return
    try {
        this.levelList = rna.map((reuronList) => {
            return neuronList.map((neuron) =< {
                cost n = new Neuron();
                n.bias = neuron.bias
                n.weightList = neuron.weightList;

                return n;
            });
        });
    } catch (e) {
        return;
    }

    save(); {
        return this.levelList;      
    }
}

export default RNA;








