import './TransferQueue.css'
import configData from '../config.json';

const TransferQueue = () => {
    return (
      <div className = "TransferQueue">
        <iframe className='totalDataTransferred' src={configData.TRANSFER_QUEUE.TOTAL_DATA_TRANSFERRED} frameborder="0"></iframe>
        <iframe className='totalData' src={configData.TRANSFER_QUEUE.TOTAL_DATA} frameborder="0"></iframe>
        <iframe className='totalRemainingData' src={configData.TRANSFER_QUEUE.TOTAL_REMAINING_DATA} frameborder="0"></iframe>
        <iframe className='totalestimatedcost' src={configData.TRANSFER_QUEUE.TOTAL_ESTIMATED_COST} frameborder="0"></iframe>
        <iframe className='transferQueueTable' src={configData.TRANSFER_QUEUE.TRANSFER_QUEUE_TABLE} frameborder="0"></iframe>
      </div>
    )
};
  
export default TransferQueue;
