import { useRouteError } from 'react-router-dom'

const ErrorPage = (): JSX.Element => {
  const error = useRouteError()
  console.error(error)

  return (
    <div>
        <h1>Oooops!</h1>
        <p>Sorry, an unexpected error has ocurred.</p>
        {/* <p>
            <i>{error.statusText || error.message}</i>
        </p> */}
    </div>
  )
}

export default ErrorPage
