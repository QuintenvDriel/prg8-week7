import { createChart, updateChart } from "./scatterplot.js"




    

loadData();

function loadData() {   
         Papa.parse("./data/Mobile Phone.csv", {  
                download: true,  
                header: true,      
                dynamicTyping: true,     
                complete: results => prepareData(results.data),
                
        })}
    
function prepareData(data) {  
        data.sort(() => Math.random() > 0.5) 
        

let trainData = data.slice(0, Math.floor(data.length * 0.8)) 
let testData  = data.slice(Math.floor(data.length * 0.8) + 1)

let nn = ml5.neuralNetwork({ task: 'regression', debug: true })

    // data toevoegen aan neural network
    for(let [Phone] of trainData){
        nn.addData({ ramGb: Phone.ramGb, romGb: Phone.romGb, stars: Phone.stars}, { price: Phone.price })
    }
checkData();
}

function checkData() {

        NaN.train({ epochs:10 },  () => finishedTraining())
        

}

async function finishedTraining(){
        let results = await NaN.predict()
        console.log(results)
        saveModel
}

function saveModel(){ 
          nn.save()}





const data = [
        { price: 2357, memory: 16 },
        { price: 1749, memory: 4 },
        { price: 1916, memory: 8 },
        { price: 1315, memory: 4 },
        { price: 1749, memory: 4 },
        { price: 2137, memory: 16 },
        { price: 1238, memory: 8 },
]
