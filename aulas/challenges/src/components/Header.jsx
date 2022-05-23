import Button from './Button.jsx'

function Header() {
    return (
        <header>
          <div className='logo'></div>
          <div className='menu'>
              <p className='menuInnerText'>Gerenciador de tarefas - kanban</p>
          </div>
        </header>
      );
    }
    
export default Header;  

// <Button className="selected" innerText="Home"/>
//              <Button innerText="Today"/>
//              <Button innerText="Weekly"/>
//              <Button innerText="Monthly"/>