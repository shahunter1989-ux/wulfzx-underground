import { SiteFrame } from './foundation/SpecialtyPages'
import React from 'react'
import { gameCards } from './content'
import './arcade.css'

function GamePlayer({ game, session }) {
  const host = React.useRef(null)
  const frame = React.useRef(null)
  const [loadState, setLoadState] = React.useState('loading')
  const [size, setSize] = React.useState({ width: 0, height: 0 })
  React.useEffect(() => {
    setLoadState('loading')
    const timeout = window.setTimeout(() => setLoadState(state => state === 'loading' ? 'slow' : state), 12000)
    return () => window.clearTimeout(timeout)
  }, [game.href, session])
  const handleLoad = () => {
    // An initial about:blank load is not a loaded game. Cross-origin game
    // documents are intentionally unreadable; their load event ends the wait.
    try {
      if (!frame.current?.contentDocument || frame.current.contentDocument.URL !== 'about:blank') setLoadState('loaded')
    } catch {
      setLoadState('loaded')
    }
  }
  React.useLayoutEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setSize({ width: entry.contentRect.width, height: entry.contentRect.height })
    })
    observer.observe(host.current)
    return () => observer.disconnect()
  }, [])
  const { width, height } = game.viewport
  const scale = Math.min(size.width / width, size.height / height)
  const frameStyle = { width, height, left: (size.width - width * scale) / 2, top: (size.height - height * scale) / 2, transform: `scale(${scale})` }
  return <div className="cabinet-player" ref={host}>
    <iframe ref={frame} key={`${game.href}-${session}`} style={frameStyle} src={game.href} onLoad={handleLoad} onError={() => setLoadState('slow')} title={`${game.title} game`} allow="autoplay; fullscreen; gamepad" allowFullScreen />
    {loadState !== 'loaded' && <div className="game-loading" role="status">
      <strong>{loadState === 'loading' ? `Loading ${game.title}…` : 'Game hasn’t appeared?'}</strong>
      <p>{loadState === 'loading' ? 'Waiting for the game to load.' : 'This browser may not support the embedded game. Open it directly to play.'}</p>
      <a href={game.href}>Play directly →</a>
      {loadState === 'slow' && <button type="button" onClick={() => setLoadState('loaded')}>Keep waiting in cabinet</button>}
    </div>}
  </div>
}

export default function ArcadePage() {
  const [selected, setSelected] = React.useState(0)
  const [playing, setPlaying] = React.useState(false)
  const [menu, setMenu] = React.useState(false)
  const [help, setHelp] = React.useState(false)
  const [session, setSession] = React.useState(0)
  const [windowRequested, setWindowRequested] = React.useState(false)
  const cabinet = React.useRef(null)
  const game = gameCards[selected]
  React.useEffect(() => {
    const previous = document.title
    document.title = 'WZXU Arcade | Wulfzx.Underground'
    return () => { document.title = previous }
  }, [])
  const choose = (index) => { setSelected(index); if (gameCards[index].launchMode === 'window') setPlaying(false); setWindowRequested(false); setMenu(false); setHelp(false); setSession(value => value + 1) }
  const start = () => {
    if (game.launchMode === 'window') {
      const width = Math.min(1200, window.screen.availWidth)
      const height = Math.min(900, window.screen.availHeight)
      window.open(game.href, '_blank', `popup=yes,width=${width},height=${height},noopener,noreferrer`)
      setWindowRequested(true)
      setPlaying(false)
    } else {
      setPlaying(true)
    }
    setMenu(false)
    setHelp(false)
  }
  const move = (step) => { setPlaying(false); choose((selected + step + gameCards.length) % gameCards.length) }
  const controls = [
    ['Previous game', () => move(-1)], ['Next game', () => move(1)], ['Start game', start],
    ['Games menu', () => setMenu(value => !value)], ['Return to selection', () => { setPlaying(false); setMenu(false) }], ['Player help', () => setHelp(value => !value)],
  ]
  const gameList = <div className="cabinet-game-list" aria-label="Choose a game">
    {gameCards.map((item, index) => <button key={item.title} type="button" aria-pressed={selected === index} className={selected === index ? 'selected' : ''} onClick={() => choose(index)}><span aria-hidden="true">{item.menuImage ? <img className="game-menu-art" src={item.image} alt="" /> : ['✦', 'W', '♟', '◈', '▥', '◇'][index]}</span><span>{item.title}{item.launchMode === 'window' && <small> · New window</small>}</span><span aria-hidden="true">›</span></button>)}
    {[7].map(slot => <button type="button" key={slot} disabled><span aria-hidden="true">♙</span><span>Coming soon</span><small>LOCKED</small></button>)}
  </div>
  return <SiteFrame><main className="arcade-room">
    <div className="wf-container wf-page-title"><h1>WZXU Arcade</h1><p>Pick a game. Make a little time to play.</p></div>
    <div className="cabinet" ref={cabinet}>
      <img className="cabinet-frame" src={`${import.meta.env.BASE_URL}assets/arcade-cabinet.png`} alt="WZXU Arcade cabinet with blue and red controls" />
      <section className={`cabinet-screen ${playing ? 'is-playing' : ''}`} aria-label="Arcade screen">
        {playing ? <GamePlayer game={game} session={session} /> : <div className="cabinet-selection">
          <div className="cabinet-library"><h2>SELECT A GAME</h2>{gameList}</div>
          <div className="cabinet-preview"><h2>WZXU <span>ARCADE</span></h2><img src={game.image} alt={game.imageAlt} /><button className="screen-start" type="button" onClick={start}>{game.launchMode === 'window' ? 'PLAY IN NEW WINDOW ↗' : '▶ START GAME'}</button>{game.launchMode === 'window' && <p className="embed-note">Opens separately. If the window is blank or blocked, <a href={game.href}>play directly in this tab</a>.</p>}{windowRequested && <p className="embed-note" role="status">Window requested. You can also use Play directly below.</p>}</div>
        </div>}
        {menu && <div className="cabinet-menu"><div className="menu-heading"><h2>SELECT A GAME</h2><button type="button" onClick={() => setMenu(false)} aria-label="Close game menu">×</button></div>{gameList}</div>}
        {help && <div className="cabinet-help"><button type="button" onClick={() => setHelp(false)} aria-label="Close player help">×</button><h2>PLAYER HELP</h2><p>Click inside the game to use its keyboard or mouse controls. Use GAMES to switch; switching starts a fresh game.</p><p>Cabinet buttons control this menu. Use the game’s own controls during play.</p><p>If the screen stays blank, try reloading. Some game sites may restrict embedded play.</p><button type="button" onClick={() => { setSession(value => value + 1); setHelp(false) }}>Reload game</button></div>}
        <footer className="screen-footer"><span>{playing ? game.title : 'PLAYER 1'}</span><a href={game.href} title="Open the game in this tab; use browser Back to return">Play directly ↗</a><button type="button" onClick={() => setMenu(value => !value)}>⊞ GAMES</button><button type="button" onClick={() => setHelp(value => !value)} aria-label="Player help">?</button></footer>
      </section>
      {['blue', 'red'].map(color => <div className={`physical-bank ${color}`} key={color}>{controls.map(([label, action]) => <button key={label} type="button" title={label} aria-label={`${color} cabinet: ${label}`} onClick={action} />)}</div>)}
      <button className="physical-select" type="button" aria-label="Cabinet select next game" title="Select next game" onClick={() => move(1)} />
      <button className="physical-start" type="button" aria-label="Cabinet start game" title="Start game" onClick={start} />
    </div>
    <p className="room-hint">SELECT A GAME · PRESS START · PLAY IN THE CABINET</p>
    <p className="room-controls">Blue & red buttons: previous · next · start / games · selection · help</p>
  </main></SiteFrame>
}
