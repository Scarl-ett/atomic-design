import styled from 'styled-components';
import Text from '../_Atoms/Text';
import SearchBar from '../_Molecules/SearchBar';

const HeaderContainer = styled.header`
  border-bottom: 2px solid #010101;
`
const Navigation = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
`
const Content = styled.div`
  width: 100%;
  padding: 0 4vw;
  display: flex;
  justify-content: space-between;
`
const NavigationSection = styled.nav`
  justify-content: flex-start;
  display: flex;
  align-items: center;
  flex: 1;
`
const ItemSection = styled.ul`
  justify-content: flex-start;
  display: flex;
  flex: 1;
`
const Item = styled.li`
  position: relative;
  width: auto;
  list-style: none;
  padding: 1rem;
`
const SearchSection = styled.a`
  display: inline-block;
  white-space: nowrap;
  flex-basis: auto;
  width: auto;
`
const MenuText = styled(Text)`
  font-weight: bold;
`

const Header = ({ onChange, onClick }) => {
  return (
    <HeaderContainer>
      <Navigation>
        <Content>
          <NavigationSection>
            <ItemSection>
              <Item><MenuText type={'large'} value={'Home'} /></Item>
              <Item><MenuText type={'large'} value={'About'} /></Item>
              <Item><MenuText type={'large'} value={'Blog'} /></Item>
              <Item><MenuText type={'large'} value={'Contact'} /></Item>
            </ItemSection>
          </NavigationSection>
          <SearchSection>
            <SearchBar onChange={onChange} onClick={onClick}></SearchBar>
          </SearchSection>
        </Content>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header