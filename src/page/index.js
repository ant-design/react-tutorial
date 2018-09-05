import Link from 'umi/link';

export default () =>
  <>
    <h1>Index Page</h1>
    <h2>Pages</h2>
    <ul>
      <li><Link to="/dashboard/analysis">/dashboard/analysis</Link></li>
      <li><Link to="/cards">/cards</Link></li>
      <li><Link to="/puzzlecards">/puzzlecards</Link></li>
      <li><Link to="/helloworld">/helloworld</Link></li>
      <li><Link to="/locale">/locale</Link></li>
    </ul>
  </>
