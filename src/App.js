import * as S from './styled';
import * as T from './components/ComponentStyled';
import SetTelescope from './components/SetTelescope';
import ManualControl from './components/ManualControl';
import LogInformation from './components/LogInformation';
import AutoControl from './components/AutoControl';
import Sphere from './components/space/Sphere';

function App() {
  return (
    <div>
      <div className='background'>
        <S.RowLine style={{ paddingTop: '10px' }} />
        <S.RowLine style={{ marginTop: '8px' }} />
        <S.RowLine style={{ marginTop: '8px' }} />
        <S.RowLine style={{ marginTop: '20px' }} />
        <S.RowLine style={{ marginTop: '25px' }} />
        <S.ColumnText style={{ position: 'absolute', left: '45px', top: '130px' }}>
          <T.GradientTitle>Star Dectector</T.GradientTitle>
        </S.ColumnText>
        <S.ColumnLine style={{ position: 'absolute', left: '100px', top: '0px' }} />
        <S.ColumnText style={{ position: 'absolute', left: '110px', top: '270px', fontSize: '1.5vh' }}>
          <T.GradientDetail>Constellation</T.GradientDetail>
        </S.ColumnText>
        <S.ColumnLine
          style={{ position: 'absolute', left: '135px', top: '400px', height: '30px', border: '3px solid #5c8e8a' }}
        />
        <S.Box style={{ marginLeft: '170px'}}>
          <div style={{ margin: '20px' }}>
            <SetTelescope />
            <ManualControl />
            <AutoControl />
            <LogInformation />
            <Sphere style={{display: 'flex'}}/>
          </div>
        </S.Box>

        <S.RowLine />
      </div>
    </div>
  );
}

export default App;