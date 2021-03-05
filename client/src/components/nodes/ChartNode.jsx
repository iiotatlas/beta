import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const ChartNode = ({ lastValue, optionsData }) => {

    /** Descomposicion de los datos necesarios para el renderizado de la grafica*/
    const {
        ID,
        nameSerie,
        maxValueY, minValueY,
        QtyY, dataX,
        QtyX, dataY,
        heightChart, typeChart, colorChart 
    } = optionsData;

    /** Valores Iniciales */
    const [lastValueX, setLastValueX] = useState(dataX[dataX.length - 1]);
    const [seriesY, setSeriesY] = useState([{ name: nameSerie, data: dataY }]);
    const [options, setOptions] = useState({
        chart: {
            id: ID,
            animations: {
                enabled: false,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1
                }
            },
        events: {
            click: () => {},
            mouseMove: () => {},
            zoomed: () => {}
        }
        },
        colors: [colorChart],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 4,
        },
        xaxis: {
            categories: dataX,
            tickAmount: QtyX,
            type: 'numeric',
            low: 0,
            offsetX: 0,
            offsetY: 0,
            show: true,
            labels: {
                low: 0,
                offsetX: 0,
                show: true,
            },
            axisBorder: {
                low: 0,
                offsetX: 0,
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            tickAmount: QtyY,
            min: minValueY,
            max: maxValueY,
        },
    });

    const [preLastValue, setPreLastValue] = useState(lastValue)

    // TODO: Verificar Buenas practicas

    /** Actualizacion del Grafico para Renderizar*/
    const updateCharts = () => {

        const testNumber = 2.5;
        let newSeriesY = [];
        let newOptionsX = {};
        const newData = isNaN(lastValue) || preLastValue === lastValue ? preLastValue : parseInt(lastValue);

        let dataY = [...seriesY[0].data, newData];
        dataY = dataY.filter((_, index) => index !== 0);
        newSeriesY.push({ data: dataY });

        let categoriesX = options.xaxis.categories;
        categoriesX = categoriesX.filter((_, index) => index !== 0);
        setLastValueX( lastValueX + testNumber )
        categoriesX.push(lastValueX)

        const dataXAxis = { categories: categoriesX };
        newOptionsX = {...options, xaxis: dataXAxis };

        setOptions(newOptionsX)
        setSeriesY(newSeriesY);
    }

    useEffect(() => {
        // TODO: mejorar codigo desaparecer valor Undefined, unndefined indicaria que no estaria mandando o no habria comunicacion
        if (!isNaN(lastValue)) {
            updateCharts();
        } else {
            const lastPos = seriesY[0].data.length - 1;
            setPreLastValue(seriesY[0].data[lastPos]);
        }
        // eslint-disable-next-line
    }, [lastValue])

    //TODO: remove // eslint-disable-next-line
    useEffect(() => {
        const id = setInterval(() => {
            if (!isNaN(lastValue)) {
                updateCharts();
            }
        }, 1000);
        return () => {
            clearInterval(id)
        }
        // eslint-disable-next-line
    }, [seriesY])

    console.log(seriesY);

    return (
        <>
            <ReactApexChart
                options={options}
                series={seriesY}
                type={typeChart}
                height={heightChart}
            />
        </>
    );
}

export default ChartNode;
