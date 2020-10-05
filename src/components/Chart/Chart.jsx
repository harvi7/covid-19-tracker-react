import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';
import LineGraph from '../LineGraph/LineGraph';
import { Button } from '@material-ui/core';

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
    const [caseType, setCaseType] = useState("cases")  

    const barChart = (
        confirmed
            ?   (
                <div style={{width:"900px"}}>
                    <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgba(0, 0, 255, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(255, 0, 0, 0.5)'
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}`},
                    }}
                />
                </div>
                
            ) : null
    )

    return (
        <div>
            <div className={styles.container}>
                {country ? barChart : 
                <div className={styles.linechart}>
                    <div className={styles.button}>
                        <Button onClick={(e)=> setCaseType("cases")}>cases</Button>
                        <Button onClick={(e)=> setCaseType("recovered")}>recovered</Button>
                        <Button onClick={(e)=> setCaseType("deaths")}>deaths</Button>
                    </div>
                    <LineGraph className="app__graph" casesType={caseType} />
                </div>}
            </div>
        </div>
        
      )
}   

export default Chart;