import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseCarCard from '../../../Hooks/UseCarCard';

const CategoryCar = () => {

const [polices, setPolices] = useState();
const [ambulances, setAmbulances] = useState();
const [minicars, setMiniCars] = useState();
const [taxis, setTaxis] = useState();


// Category data fetch
useEffect(()=>{
    fetch('http://localhost:5000/allCar')
    .then(res => res.json())
    .then(data =>{
        
        // console.log(data)
        setPolices(data?.filter(da=>da.category=== "Police Car"));
        setAmbulances(data.filter(da=>da.category=== "Ambulance Car"));
        setMiniCars(data.filter(da=>da.category=== "Mini Car"));
        setTaxis(data.filter(da=>da.category=== "Taxi Car"));
        // setTransformers(data.filter(da=>da.category === "Transformers"));
              } 
        )
},[])
    
    return (
        <div className='my-10'>
        <h1 className='my-5 text-3xl font-bold text-center'>Shop By Category</h1>
       
<Tabs>
<TabList className="text-xl">
  <Tab>Police</Tab>
  <Tab>Ambulance</Tab>
  <Tab>Mini Car</Tab>
  <Tab>Taxi</Tab>
</TabList>

<TabPanel>
  <div className='grid gap-5 my-4 md:grid-cols-3'>
    { 
 polices?.map(police => <UseCarCard
    key={police._id}
    data={police}
 ></UseCarCard> )
    }
   </div>
</TabPanel>

<TabPanel>
<div className='grid gap-5 my-4 md:grid-cols-3'>
    { 
  ambulances?.map(ambulance => <UseCarCard
    key={ambulance._id}
    data={ambulance}
  ></UseCarCard>)
    }
   </div>
</TabPanel>

<TabPanel>
<div className='grid gap-5 my-4 md:grid-cols-3'>
    { 
  minicars?.map(minicar => <UseCarCard
    key={minicar._id}
    data={minicar}
  ></UseCarCard> )
    }
   </div>
</TabPanel>

<TabPanel>
<div className='grid gap-5 my-4 md:grid-cols-3'>
{ 
  taxis?.map(taxi => <UseCarCard
    key={taxi._id}
    data={taxi}
  ></UseCarCard>)
    }
   </div> 
</TabPanel>

</Tabs>
       
    </div>
    );
};

export default CategoryCar;