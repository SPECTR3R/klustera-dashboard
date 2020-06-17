export const genGraphData = visitorsDaily => {
  const dates = [];
  const visits = [];
  const passersby = [];

  visitorsDaily.forEach(elem => {
    dates.push(elem[0]);
    visits.push(elem[1]);
    passersby.push(elem[2]);
  });

  return {
    labels: dates,
    datasets: [
      {
        label: 'Visits',
        backgroundColor: '#52c41a',
        hoverBackgroundColor: '#95de64',
        data: visits,
      },
      {
        label: 'Passersby',
        backgroundColor: '#1890ff',
        hoverBackgroundColor: '#69c0ff',
        data: passersby,
      },
    ],
  };
};

export const graphOptions = {
  maintainAspectRatio: false,
  responsive: true,
  title: { display: true, text: 'Foot Traffic', fontSize: 25 },
  legend: { display: true, position: 'bottom', labels: { boxWidth: 20 } },
};
