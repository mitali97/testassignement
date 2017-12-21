<?php
namespace Excellence\Hello\Controller\Index;


class World extends \Magento\Framework\App\Action\Action
{
   protected $resultPageFactory;
   public function __construct(
       \Magento\Framework\App\Action\Context $context,
       \Magento\Framework\View\Result\PageFactory $resultPageFactory)
   {
       $this->resultPageFactory = $resultPageFactory;      
       return parent::__construct($context);
   }
   
   public function execute()
   {
   // die("ggg");
       return $this->resultPageFactory->create();
   } 
}
