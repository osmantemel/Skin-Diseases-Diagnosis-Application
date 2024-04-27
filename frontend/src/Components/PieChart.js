import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import '../css/PieChart.css';
const PieChartPage = () => {
  const data1 = [
    { title: 'Accuracy', value: 94, color: '#36A2EB' },
    { title: 'Hata Payı', value: 6, color: '#FF6384' }
  ];

  const data2 = [
    { title: 'Akne', value: 82, color: '#ff0000' },
    { title: 'Sorun Yok', value: 18, color: '#008000' }
  ];

  const data3 = [
    { title: 'Acil Durum', value: 95, color: '#ff0000' },
    { title: 'Not Acil', value: 5, color: '#008000' }
  ];


  const data4 = [
    { title: 'A', value: 40, color: '#FFCE56' },
    { title: 'B', value: 30, color: '#FF6384' },
    { title: 'C', value: 20, color: '#36A2EB' },
    { title: 'D', value: 10, color: '#4BC0C0' }
  ];

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-3">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Yapay Zeka Doğruluk Grafiği</h5>
              <div className="flex-grow-1">
                <PieChart
                  data={data1}
                  lineWidth={15}
                  paddingAngle={0}
                  label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                  labelStyle={{
                    fontSize: '8px',
                    fontFamily: 'sans-serif',
                  }}
                  radius={25}
                />
              </div>
              <p className="card-text">
                Yapay zekâ modelinin doğruluk oranını gösteren grafik. Lütfen modelin sürekli güncellenebileceğini unutmayın.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Hastalık Dağılım Grafiği</h5>
              <div className="flex-grow-1">
                <PieChart
                  data={data2}
                  lineWidth={15}
                  paddingAngle={0}
                  label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                  labelStyle={{
                    fontSize: '8px',
                    fontFamily: 'sans-serif',
                  }}
                  radius={25}
                />
              </div>
              <p className="card-text">
                Hangi Hastalığın var olup olmadığını gösteren grafikdir. Not: Bu veriler kesinlikle gerçeği yansıtmamaktadır.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Hastalığın Ciddiyet Grafiği</h5>
              <div className="flex-grow-1">
                <PieChart
                  data={data3}
                  lineWidth={15}
                  paddingAngle={0}
                  label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                  labelStyle={{
                    fontSize: '8px',
                    fontFamily: 'sans-serif',
                  }}
                  radius={25}
                />
              </div>
              <p className="card-text">
                Hastalığın aciliyet derecesini gösteren grafik.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Hastalık Etki Grafiği</h5>
              <div className="flex-grow-1">
                <PieChart
                  data={data4}
                  lineWidth={15}
                  paddingAngle={0}
                  label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                  labelStyle={{
                    fontSize: '5px',
                    fontFamily: 'sans-serif',
                  }}
                  radius={25}
                />
              </div>
              <p className="card-text">
               Hastalığın ne kadar etili olduğunu gösteren grafiktir Garfikteki renkli alanlar üzerine gelerek daha detaylı öğrenebilirsiniz
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartPage;
