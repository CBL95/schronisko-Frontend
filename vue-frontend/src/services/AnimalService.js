import axios from 'axios';

const ANIMAL_API_BASE_URL = 'http://localhost:8081/api/v1/animal';

class AnimalService{
    getAnimals(){
        return axios.get(ANIMAL_API_BASE_URL);
    }

    deleteAnimal(id){
        return axios.delete(ANIMAL_API_BASE_URL+"/"+id)
    }

    createAnimal(data){
        return axios.post(ANIMAL_API_BASE_URL,data);
    }

    updateAnimal(data){
        return axios.put(ANIMAL_API_BASE_URL
            +"/"+data.id
            +"?"+"name=" + data.name
            +"&"+ "category=" + data.category
            +"&"+ "sex=" + data.sex
            +"&"+ "age=" + data.age
            +"&"+ "color=" + data.color
            +"&"+ "size=" + data.size);
    }
    
}

export default new AnimalService();