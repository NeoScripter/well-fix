import { useState } from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PersonIcon from '@mui/icons-material/Person';
import Diversity3Icon from '@mui/icons-material/Diversity3';

const Services = () => {
  const [hovered, setHovered] = useState(null);

  const handleDownload = (fileName) => {
    const fileUrl = `/files/${fileName}`; // Path to the file
    window.open(fileUrl, '_blank'); // Opens the file in a new tab
  };

  return (
    <div className='services'>
      <div
        className='service-box1'
        onClick={() => handleDownload('Yksityisille.pdf')}
        onMouseEnter={() => setHovered('Yrityksille')}
        onMouseLeave={() => setHovered(null)}
      >
        <h4 style={{ display: hovered === 'Yrityksille' ? 'block' : 'none' }}>
          Klikkaa ladataksesi
        </h4>
        <PersonIcon sx={{
          width: { xs: '50px', sm: '80px', md: '90px', xl: '100px' },
          height: { xs: '50px', sm: '80px', md: '90px', xl: '100px' }
        }}/>
        <h3 className='roboto-medium'>Yksityisille</h3>
      </div>
      <div
        className='service-box'
        onClick={() => handleDownload('Yksityisille.pdf')}
        onMouseEnter={() => setHovered('Yrityksille')}
        onMouseLeave={() => setHovered(null)}
      >
        <h4 style={{ display: hovered === 'Yrityksille' ? 'block' : 'none' }}>
          Klikkaa ladataksesi
        </h4>
        <Diversity3Icon sx={{
          width: { xs: '50px', sm: '80px', md: '90px', xl: '100px' },
          height: { xs: '50px', sm: '80px', md: '90px', xl: '100px' }
        }}/>
        <h3 className='roboto-medium'>Yrityksille</h3>
      </div>
      <div
        className='service-box'
        onClick={() => handleDownload('maanrakennus.docx')}
        onMouseEnter={() => setHovered('Yksityisille')}
        onMouseLeave={() => setHovered(null)}
      >
        <h4 style={{ display: hovered === 'Yksityisille' ? 'block' : 'none' }}>
          Klikkaa ladataksesi
        </h4>
        <ApartmentIcon sx={{
          width: { xs: '50px', sm: '80px', md: '90px', xl: '100px' },
          height: { xs: '50px', sm: '80px', md: '90px', xl: '100px' }
        }}/>
        <h3 className='roboto-medium'>Kinteistö</h3>
      </div>
    </div>
  );
};

export default Services;
