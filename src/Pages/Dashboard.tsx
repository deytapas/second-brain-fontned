import { Button } from '../Component/Button'
import { Card } from '../Component/Card'
import { SideBar } from '../Component/SideBar'
import { PlusIcon } from '../Icon/Plus'
import { ShareIcan } from '../Icon/Share'
 
export function Dashboard() {
  return <div>
        <SideBar />
        <div className='p-4 bg-gray-400 min-h-screen ml-72'>
          <div className='flex justify-end gap-4'> 
            <Button title='Add Content' type='primary' startIcan={<PlusIcon />}/>
            <Button title='Share brain' type='secondary' startIcan={<ShareIcan />}/>
          </div>
          <Card title='Hello' />
        </div>
  </div>
}