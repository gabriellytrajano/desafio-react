import { Task } from './components/Task.module';
import { Tasks } from './components/Tasks.module';
import { Header } from './components/Header.module';
import './components/global.css'

export function App() {
  return (
    <div>
      <Header/>
      <Tasks/>
    </div>
  )
}