import {Heading, CustomButton, Button, TomatoButton} from './styledComponents'

import './App.css'

// // import {CustomButton} from './styledComponents'

// const App = () => (
//   <>
//     <CustomButton outline={false}>Click</CustomButton>
//     <CustomButton as="a" href="#" outline={true}>
//       Click
//     </CustomButton>
//   </>
// )

// export default App

const App = () => {
  return (
    <>
      <Heading>Hello World</Heading>
      // <Button type="button">click</Button>
      {' '}
      <Button type="button" as="a" href="#">
        // Link with Button styles //
      </Button>
      {' '}
      <TomatoButton type="submit" outline onClick={() => alert('clicked')}>
        // as="a" href="#" ink with Button styles //{' '}
      </TomatoButton>
      <CustomButton as="a" href="#" outLinnn={true}>
        Click
      </CustomButton>
      <CustomButton
        as="a"
        href="https://support.google.com/chrome/answer/95426?hl=en&co=GENIE.Platform%3DDesktop"
        target="_blank"
      >
        Click
      </CustomButton>
    </>
  )
}

export default App
