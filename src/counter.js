import "./counter.css"
import { useState } from "react";
export default function Counter() {

    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    //let [experiment, setlist] = useState([]);
    let [btn1_name, setName2] = useState("click me")
    let [btn2_name, setName1] = useState("click me")

    function firstCounter() {
        setCount1(count1 + 1);
    }

    function secondCounter() {
        setCount2(count2 + 1);
    }
    const resetCount = () => {
        setCount1(count1 = 0);
        setCount2(count2 = 0);
    }

    const changeMenu = () => {
            var select = document.getElementById('selector').value;
            console.log(select);

            if (select === "Maturity") {
                //document.getElementById('button1').innerHTML = "Adult";
                //document.getElementById('button2').innerHTML = "Juvenile";
                setName1(btn1_name = "Adult")
                setName2(btn2_name = "Juvenile")
                resetCount();
            } else if (select === "Sex") {
                //document.getElementById('button1').innerHTML = "Male";
                //document.getElementById('button2').innerHTML = "Hermaphrodite";
                setName1(btn1_name = "Male")
                setName2(btn2_name = "Hermaphrodite")
                resetCount();
            } else if (select === "Coordination") {
                //document.getElementById('button1').innerHTML = "Coordinated";
                //document.getElementById('button2').innerHTML = "Coordinated";
                setName1(btn1_name = "Coordinated")
                setName2(btn2_name = "Coordinated")
                resetCount();
            } else if (select === "Mutant") {
                //document.getElementById('button1').innerHTML = "Nominal";
                //document.getElementById('button2').innerHTML = "Mutant";
                setName1(btn1_name = "Nominal")
                setName2(btn2_name = "Mutant")
                resetCount();
            }
        }
        /*
         * Creates new html list element for the current experiment
         *  appends all the data to that element
         */
    const done = () => {

            const btn1 = btn1_name;
            const btn2 = btn2_name;
            //set the counts as the inner html element
            //setlist(experiment= {category1: btn1, cnt1: count1, category2: btn2, cnt2: count2})
            //reset count and html fields
            resetCount();
        }
        /*const list_experiments = experiment.map(experiment =>
            <><li>{experiment.category1}</li>
                <li>{experiment.cnt1}</li>
                <li>{experiment.category2}</li>
                <li>{experiment.cnt2}</li>
            </>
        );*/
    return ( <
        >
        <
        div class = "header" >
        <
        h1 >
        SWEN - 344 Web Assignment 1 < /h1> <
        h2 > Section 02 <
        /h2> <
        h3 id = "experiment" > Blister Mutation < /h3> <
        h3 id = "Petri-Dish" > Petri Dish 1 < /h3> <
        select id = "selector"
        onChange = { changeMenu } >
        <
        option value = "1" > < /option> <
        option value = "Maturity" > Maturity < /option> <
        option value = "Sex" > Sex < /option> <
        option value = "Coordination" > Coordination < /option> <
        option value = "Mutant" > Mutant < /option> <
        /select> <
        /div>

        <
        div >
        <
        section class = "buttons" >
        <
        button id = "reset-button"
        onClick = { resetCount } > Reset Count < /button> <
        button id = "done-button" > Done < /button> <
        /section> <
        /div><section class="content"> <
        div class = "content-1" >
        <
        h1 class = "counter-1"
        id = "counter-1" > { count1 } < /h1> <
        /div> <
        div class = "content-2" >
        <
        h1 class = "counter-2"
        id = "counter-2" > { count2 } < /h1> <
        /div> <
        div class = "content-3" >
        <
        button onClick = { firstCounter }
        id = "button1" > { btn1_name } < /button> <
        /div> <
        div class = "content-4" >
        <
        button onClick = { secondCounter }
        id = "button2" > { btn2_name } < /button> <
        /div> <
        /section> <
        section id = "results" >
        <
        h3 > Experiments < /h3> <
        /section> <
        />
    );
}