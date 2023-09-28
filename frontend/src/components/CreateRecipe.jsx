import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/CreateRecipe.css"
import axios from 'axios';
import { ImUpload3 } from "react-icons/im";

const CreateRecipe = () => {
   
    const [file, setFile] = React.useState(null);
    const [progress, setProgress] = React.useState({started: false, pc: 0});
    const [msg, setMsg] = React.useState(null);

    const [title, setTitle] = React.useState('');
    const [ingredients, setIngredients] = React.useState('');
    const [cookingTime, setCookingTime] = React.useState('');
    const [text, setText] = React.useState('');
    
    const [categoriesSelect, setCategoriesSelect] = React.useState([]);

    const [categoriesPost, setCategoriesPost] = React.useState([]);
    
    let catList = [];
    


    if(!categoriesSelect.length) {
        axios.get('http://127.0.0.1:8000/api/categories/').then(res => {
        console.log(res);
        setCategoriesSelect(res.data.results);
        })
    }

    
    async function handleUpload() {
        if (!file) {
            setMsg("No file");
            return;
        }

        let fd = new FormData();

        fd.append('title', title);
        fd.append('ingredients', ingredients);
        fd.append('cooking_time', cookingTime);
        fd.append('text', text);
        fd.append('main_img', file);
        fd.append('category', categoriesPost);
        

        console.log(fd);
        

        setMsg("Uploading...");
        setProgress(prevState => {
            return {...prevState, started: true}
        })
        const {data} = await axios.post("http://127.0.0.1:8000/api/recipes/create/", fd, {
            
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            })
            .then(res => {
                setMsg("Upload successful");
                console.log(res.data);
            })
            .catch(err => {
                setMsg("Upload failed")
                console.log(err);
            })
        
    }
    
    
    return (
        <div className='create-recipe'>
            <h2>Создать рецепт</h2>

            <form className='create-form'>
                <label htmlFor="title">Заголовок</label>
                <input type="text" name='title' placeholder='Заголовок' onChange={(e) => {
                    setTitle(e.target.value)
                }}/>

                <label htmlFor="category" className='category-label'>Выберите категорию</label>
                <select name='category' size="4" multiple>
                    {categoriesSelect.map(category => <option key={category.id} value={category.id} onClick={(e) => {
                        setCategoriesPost(e.target.value);
                    }}>{category.name}</option>)}
                    
                    
                    
                </select>

                <label htmlFor="ingredients">Ингредиенты</label>
                <input type="text" name='ingredients' placeholder='Ингредиенты' onChange={(e) => {
                    setIngredients(e.target.value)
                }}/>

                <label htmlFor="cooking_time">Время готовки</label>
                <input type="text" name='cooking_time' placeholder='Время готовки' onChange={(e) => {
                    setCookingTime(e.target.value)
                }}/>


                <label htmlFor="text">Введите текст</label>
                <textarea name="text" id="text" cols="50" rows="10" placeholder='Текст рецепта' onChange={(e) => {
                    setText(e.target.value)
                }}></textarea>

                <label htmlFor="file-input" className='custom-input-upload'><p className='icon'><ImUpload3/></p></label>

                <input accept='.png, .jpg, .jpeg, .gif, .web' onChange={(e) => {setFile(e.target.files[0])}} id="file-input" type="file" name='main_img'/>

                <button type='submit' className='submit-form btn upload' onClick={handleUpload}>Загрузить</button>
                
                <Link to={'/'} className='link-main btn'>На главную</Link>
            </form>

           { progress.started && <progress max={100} value={progress.pc}></progress>}
           { msg && <span>{msg}</span>}
           {/* <p>{text}</p>
           <p>{title}</p>
           <p>{ingredients}</p>
           <p>{cookingTime}</p> */}
           {/* <p>{categoriesPost}</p> */}
           
           
           
           
        </div>
    );
};

export default CreateRecipe;