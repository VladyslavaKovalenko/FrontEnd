function Student(name, surname, year, marks){
    this.name=name
    this.surname=surname
    this.year =year
    this.marks=marks
    this.attend=[]
    
    this.showAge = function(){
        alert(`${new Date().getFullYear() - this.year} - age`)
    }

    this.present = function(){
        if(this.attend.length<26){
            this.attend.push(true) 
        } else{
            alert('too much!')
        }
    }

    this.absent = function(){
        if(this.attend.length<26){
            this.attend.push(false) 
        }else{
            alert('too much!')
        }
    }

    this.summary =function(){
        let count=0
        let sum=0;
        for(let i=0; i<this.marks.length; i++){
            sum+=this.marks[i]
        }
        let averageMark=sum/this.marks.length
        console.log(averageMark)

        for(let i=0; i<this.attend.length; i++){
            if(this.attend[i]==true){
                count++
            }
           
        }
        let averageAttend=count/25
        console.log(averageAttend)

        if(averageMark>90 && averageAttend>0.9){
            alert('Молодец')
        } else if(averageMark>90 || averageAttend>0.9){
            alert('Хорошо, но можно лучше')
        }else if(averageMark<90 && averageAttend<0.9){
            alert('Редиска')
        }
    }

}

let john = new Student('John', 'Smith', 2003, [90, 97, 85, 99, 83, 96])
john.showAge()

john.present()
john.absent()
john.absent()
john.absent()
john.absent()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.absent()
john.present()
john.present()
john.present()
john.present()
john.present()
john.absent()
john.absent()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()
john.present()

john.summary()

let marry = new Student('Marry', 'Brown', 1994, [86, 82, 90, 95, 87, 91, 100, 92])
marry.showAge()

marry.absent()
marry.present()
marry.present()
marry.present()
marry.present()
marry.present()
marry.present()
marry.present()
marry.present()
marry.absent()
marry.present()
marry.present()
marry.present()
marry.present()
marry.present()
marry.present()
marry.present()
marry.present()
marry.present()
marry.present()
marry.present()
marry.present()
marry.present()
marry.present()
marry.present()
marry.present()

marry.summary()