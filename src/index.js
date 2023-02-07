(function () {

  document.querySelector('body').insertAdjacentHTML('afterbegin', `<div id='root'></div>`)
  
  const DisplayOnResize = () => {
    if (window.matchMedia("(width<=375px)").matches) {
      // RULES
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelectorAll('.flex').forEach(item => {
        item.classList.remove('flex-row');
        item.classList.add('flex-col');
      })
      document.querySelector('.header').classList.add('flex-col');
      document.querySelector('.main').classList.add('flex-col');
      document.querySelector('.main').classList.add('center');
      document.querySelector('.sub-section').classList.add('center');
    }
    if (window.matchMedia("(width>375px)").matches) {
      // RULES
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelectorAll('.flex').forEach(item => {
        item.classList.remove('flex-col');
        item.classList.add('flex-row');
      })
      document.querySelector('.header').classList.remove('flex-col');
      document.querySelector('.main').classList.remove('flex-col');
      document.querySelector('.main').classList.remove('center');
      document.querySelector('.sub-section').classList.remove('center');
    }
  }

  window.addEventListener('resize', () => {
    let timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(DisplayOnResize(), 500);
  });

  class Heading extends React.Component {
    constructor(props) {
      super();
    }
    render() {
      if (this.props.query == 'h1') return <h1 className={this.props.class}>{this.props.content}</h1>;
      else if (this.props.query == 'h2') return <h2 className={this.props.class}>{this.props.content}</h2>;
      else return <h3 className={this.props.class}>{this.props.content}</h3>
    }
  }

  class Button extends React.Component {
    constructor(props) {
      super();
    }
    render() {
      return <button className={this.props.class}>{this.props.content}</button>;
    }
  }

  class Para extends React.Component {
    constructor(props) {
      super();
    }
    render() {
      return <p className={this.props.class}>{this.props.content}</p>;
    }
  }

  class Image extends React.Component {
    constructor(props) {
      super();
    }
    render() {
      return <img className={this.props.class} src={this.props.src} alt={this.props.alt} />;
    }
  }

  const ContactNav = () => {
    const data = ['FAQs', 'Contact Us', 'Privacy Policy', 'Press Kit', 'Install Guide'];
    const Map = ({ props }) => {
      return props.map((item) => <li key={item}>{item}</li>)
    }
    return (
      <nav className='selectable'>
        <ul className='contact flex center'>
          <Map props={data} />
        </ul>
      </nav>
    )
  }

  const SocialNav = () => {
    const data = ['fa fa-facebook-official', 'fa fa-twitter', 'fa fa-instagram'];
    const Map = ({ props }) => {
      return props.map((item) => <li key={item}><i className={item}></i></li>)
    }
    return (
      <nav className='selectable'>
        <ul className='social flex-row right'>
          <Map props={data} />
        </ul>
      </nav>
    )
  }
  
  const Attribution = () => (
    <p className='attribution'>Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>Frontend Mentor</a>. Coded by <a href='https://github.com/eserengo/' target='_blank'>Federico Borzani</a>.</p>
  );

  const App = () => {
    React.useEffect(() => {
      DisplayOnResize()
    }, []);
    return (
      <>
        <main className='main'>
          <header className='header center'>
            <Image class='main-logo' src='./src/images/logo.svg' alt='clipboard logo' />
            <Heading query='h1' class='primary title' content='A history of everything you copy' />
            <Para class='para' content='Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.' />
            <Button class='primary button selectable' content='Download for iOS' />
            <Button class='secondary button selectable' content='Download for Mac' />
          </header>

          <section className='section one'>
            <Heading query='h2' class='secondary title' content='Keep track of your snippets' />
            <Para class='para' content='Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.' />
          </section>
          
          <section className='section two flex'>
            <Image class='computer' src='./src/images/image-computer.png' alt='computer' />
            <div className='sub-section flex-col'>
              <Heading class='sub title' content='Quick Search' />
              <Para class='para' content='Easily search your snippets by content, category, web address, application, and more.' />
              <Heading class='sub title' content='iCloud Sync' />
              <Para class='para' content='Instantly saves and syncs snippets across all your devices.' />
              <Heading class='sub title' content='Complete History' />
              <Para class='para' content='Retrieve any snippets from the first moment you started using the app.' />
            </div>
          </section>

          <section className='section three'>
            <Heading query='h2' class='secondary title' content='Access Clipboard anywhere' />
            <Para class='para' content='Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.' />
            <Image class='devices' src='./src/images/image-devices.png' alt='devices' />
          </section>

          <section className='section four'>
            <Heading query='h2' class='secondary title' content='Supercharge your workflow' />
            <Para class='para' content='We’ve got the tools to boost your productivity.' />
          </section>

          <section className='section five flex'>
            <div className='flex-col center'>
              <Image class='icon' src='./src/images/icon-blacklist.svg' alt='blacklist icon' />
              <Heading class='sub title' content='Create blacklists' />
              <Para class='para' content='Ensure sensitive information never makes its way to your clipboard by excluding certain sources.' />
            </div>
            <div className='flex-col center'>
              <Image class='icon' src='./src/images/icon-text.svg' alt='text icon' />
              <Heading class='sub title' content='Plain text snippets' />
              <Para class='para' content='Remove unwanted formatting from copied text for a consistent look.' />
            </div>
            <div className='flex-col center'>
              <Image class='icon' src='./src/images/icon-preview.svg' alt='preview icon' />
              <Heading class='sub title' content='Sneak preview' />
              <Para class='para' content='Quick preview of all snippets on your Clipboard for easy access.' />
            </div>
          </section>

          <section className='section six flex center'>
            <Image class='brand-logo' src='./src/images/logo-google.png' alt='google logo' />
            <Image class='brand-logo' src='./src/images/logo-ibm.png' alt='ibm logo' />
            <Image class='brand-logo' src='./src/images/logo-microsoft.png' alt='microsoft logo' />
            <Image class='brand-logo' src='./src/images/logo-hp.png' alt='hp logo' />
            <Image class='brand-logo' src='./src/images/logo-vector-graphics.png' alt='vector graphics logo' />
          </section>

          <section className='section seven'>
            <Heading query='h2' class='secondary title' content='Clipboard for iOS and Mac OS' />
            <Para class='para' content='Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.' />
            <Button class='primary button selectable' content='Download for iOS' />
            <Button class='secondary button selectable' content='Download for Mac' />
          </section>
        </main>
        <footer className='footer flex center'>
          <Image class='footer-logo left' src='./src/images/logo.svg' alt='clipboard logo' />
          <ContactNav />
          <SocialNav />
        </footer>
        <Attribution />
      </>
    )
  }

  ReactDOM.render(<App />, document.getElementById('root'));
})();