import { Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPondWaterParam } from '../../../api/pond_fish';

function ViewWaterParam() {
      const {id} = useParams();
      const [waterParam,setWaterParam] = useState({});

      useEffect(()=>{
            getWaterParam();
      },[])

      const getWaterParam = async()=>{
            try {
                 const data =  await getPondWaterParam(id)
                 setWaterParam(data.result)
                 console.log(waterParam)
            } catch (error) {
                  console.log(error)
            }
      }
  return (
    <div>
      <Card sx={{maxWidth:350, margin:'auto'}}>
            <CardContent>
                  <Typography variant=''>Thông số của hồ</Typography>
                  <Typography>Ngày tạo: {new Date(waterParam.measurementTime).toLocaleDateString()}</Typography>
                  <Typography>Nhiệt độ: {waterParam.temperature}</Typography>
                  <Typography>Độ mặn: {waterParam.salinity}</Typography>
                  <Typography>Độ pH: {waterParam.ph}</Typography>
                  <Typography>Nồng độ O2: {waterParam.o2}</Typography>
                  <Typography>Nồng độ NO2: {waterParam.no2}</Typography>
                  <Typography>Nồng độ NO3: {waterParam.no3}</Typography>
                  <Typography>Nồng độ PO4: {waterParam.po4}</Typography>
                  <Typography>Tên hồ:  {waterParam.pondName}</Typography>
            </CardContent>
      </Card>
    </div>
  )
}

export default ViewWaterParam