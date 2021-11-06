function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

// function WelcomeDialog() {
//   return (
//     <FancyBorder color='blue'>
//       <h1 className='Dialog-title'>Welcome</h1>
//       <p className='Dialog-message'>Thank you for visiting our spacecraft!</p>
//     </FancyBorder>
//   );
// }

function Contacts() {
  return <div className='Contacts'>left</div>;
}

function Chat() {
  return <div className='Chat'>right</div>;
}

function SplitPane(props) {
  return (
    <div>
      <div>{props.left}</div>
      <div>{props.right}</div>
    </div>
  );
}

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}

export default App;
