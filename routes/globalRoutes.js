const express = require('express');
const verifyToken = require('../utils/verifyToken.js');
const upload = require('../utils/uploadDocument.js');

const documentController = require('../controllers/documentController.js');
const authorizationController = require('../controllers/authorizationController.js');
const memberController = require('../controllers/memberController.js');
const aepscomissionController = require('../controllers/aepscomissionController.js');
const aepswalletController = require('../controllers/aepswalletController.js');
const balanceController = require('../controllers/balanceController.js');
const balanceLedgerController = require('../controllers/balanceLedgerController.js');
const bankController = require('../controllers/bankController.js');
const bankSettingController = require('../controllers/bankSettingController.js');
const companyController = require('../controllers/companyController.js');
const contactusController = require('../controllers/contactusController.js');
const districtController = require('../controllers/districtController.js');
const dmrsController = require('../controllers/dmrsController.js');
const employeeController = require('../controllers/employeeController.js');
const epfoController = require('../controllers/epfoController.js');
const epfoledgerController = require('../controllers/epfoledgerController.js');
const exceptionController = require('../controllers/exceptionController.js');
const fundrequestController = require('../controllers/fundrequestController.js');
const galleryController = require('../controllers/galleryController.js');
const gstledgerController = require('../controllers/gstledgerController.js');
const gstregistrationController = require('../controllers/gstRegistrationController.js');
const idMasterController = require('../controllers/idMasterController.js');
const idRequestController = require('../controllers/idRequestController.js');
const itrController = require('../controllers/itrController.js');
const itrLedgerController = require('../controllers/itrLedgerController.js');
const loginHistoryController = require('../controllers/loginHistoryController.js');
const mainWalletLedgerController = require('../controllers/mainWalletLedgerController.js');
const messageSettingController = require('../controllers/messageSettingController.js');
const newsEventController = require('../controllers/newsEventController.js');
const orderController = require('../controllers/orderController.js');
const panLedgerController = require('../controllers/panLedgerController.js');
const panTokenController = require('../controllers/panTokenController.js');
const payoutSurchargeController = require('../controllers/payoutSurchargeController.js');
const productController = require('../controllers/productController.js');
const selfBankController = require('../controllers/selfBankController.js');
const serviceController = require('../controllers/serviceController.js');
const stateController = require('../controllers/stateController.js');
const ticketController = require('../controllers/ticketController.js');
const walletPinController = require('../controllers/walletPinController.js');

const router = express.Router();

router.post('/uploadDocument', upload.single('Document'), documentController.uploadDocument);

router.post('/userSignup', authorizationController.userSignup);
router.post('/userLogin', authorizationController.userLogin);
router.post('/checkAdmin', authorizationController.checkAdmin);

router.post('/createMember', verifyToken, memberController.createMember);
router.post('/getMembers', verifyToken, memberController.getMembers);
router.post('/getMemberById', verifyToken, memberController.getMemberById);
router.post('/updateMember', verifyToken, memberController.updateMember);
router.post('/deleteMember', verifyToken, memberController.deleteMember);
router.post('/getMemberuniqueId', verifyToken, memberController.getMemberuniqueId);

router.post('/createAepscomisison', verifyToken, aepscomissionController.createAepscomission);
router.post('/getAepscomissions', verifyToken, aepscomissionController.getAepscomission);
router.post('/getAepscomisisonById', verifyToken, aepscomissionController.getAepscomissionById);
router.post('/updateAepscomisison', verifyToken, aepscomissionController.updateAepscomission);
router.post('/deleteAepscomission', verifyToken, aepscomissionController.deleteAepscomission);

router.post('/createAepswallet', verifyToken, aepswalletController.createAepswallet);
router.post('/getAepswallet', verifyToken, aepswalletController.getAepswallet);
router.post('/getAepswalletById', verifyToken, aepswalletController.getAepswalletById);
router.post('/updateAepswallet', verifyToken, aepswalletController.updateAepswallet);
router.post('/deleteAepswallet', verifyToken, aepswalletController.deleteAepswallet);

router.post('/createBalance', verifyToken, balanceController.createBalance);
router.post('/getBalance', verifyToken, balanceController.getBalance);
router.post('/getBalanceById', verifyToken, balanceController.getBalanceById);
router.post('/updateBalance', verifyToken, balanceController.updateBalance);
router.post('/deleteBalance', verifyToken, balanceController.deleteBalance);

 router.post('/createBalanceledger', verifyToken, balanceLedgerController.createBalanceledger);
 router.post('/getBalanceledger', verifyToken, balanceLedgerController.getBalanceledger);
 router.post('/getBalanceledgerById', verifyToken, balanceLedgerController.getBalanceledgerById);
 router.post('/updateBalanceledger', verifyToken, balanceLedgerController.updateBalanceledger);
 router.post('/deleteBalanceledger', verifyToken, balanceLedgerController.deleteBalanceledger);

router.post('/createBank', verifyToken, bankController.createBank);
router.post('/getBanks', verifyToken, bankController.getBanks);
router.post('/getBankById', verifyToken, bankController.getBankById);
router.post('/updateBank', verifyToken, bankController.updateBank);
router.post('/deleteBank', verifyToken, bankController.deleteBank);

router.post('/createBanksetting', verifyToken, bankSettingController.createBankSetting);
router.post('/getBanksettings', verifyToken, bankSettingController.getBankSettings);
router.post('/getBanksettingById', verifyToken, bankSettingController.getBankSettingById);
router.post('/updateBanksetting', verifyToken, bankSettingController.updateBankSetting);
router.post('/deleteBanksetting', verifyToken, bankSettingController.deleteBankSetting);

router.post('/createCompany', verifyToken, companyController.createCompany);
router.post('/getCompanies', verifyToken, companyController.getCompanies);
router.post('/getComapaniesById', verifyToken, companyController.getCompanyById);
router.post('/updateCompany', verifyToken, companyController.updateCompany);
router.post('/deleteCompany', verifyToken, companyController.deleteCompany);

router.post('/createContactus', verifyToken, contactusController.createContactUs);
router.post('/getContactus', verifyToken, contactusController.getContactUs);
router.post('/getContactusById', verifyToken, contactusController.getContactUsById);
router.post('/updateContactus', verifyToken, contactusController.updateContactUs);
router.post('/deleteContactus', verifyToken, contactusController.deleteContactUs);

router.post('/createDistrict', verifyToken, districtController.createDistrict);
router.post('/getDistricts', verifyToken, districtController.getDistricts);
router.post('/getDistrictById', verifyToken, districtController.getDistrictById);
router.post('/updateDistrict', verifyToken, districtController.updateDistrict);
router.post('/deleteDistrict', verifyToken, districtController.deleteDistrict);

router.post('/createDmrs', verifyToken, dmrsController.createDmrs);
router.post('/getDmrs', verifyToken, dmrsController.getDmrs);
router.post('/getDmrsById', verifyToken, dmrsController.getDmrsById);
router.post('/updateDmrs', verifyToken, dmrsController.updateDmrs);
router.post('/deleteDmrs', verifyToken, dmrsController.deleteDmrs);

router.post('/createEmployee', verifyToken, employeeController.createEmployee);
router.post('/getEmployee', verifyToken, employeeController.getEmployees);
router.post('/getEmployeeById', verifyToken, employeeController.getEmployeeById);
router.post('/updateEmployee', verifyToken, employeeController.updateEmployee);
router.post('/deleteEmployee', verifyToken, employeeController.deleteEmployee);

router.post('/createEpfo', verifyToken, epfoController.createEpfo);
router.post('/getEpfo', verifyToken, epfoController.getEpfos);
router.post('/getEpfoById', verifyToken, epfoController.getEpfoById);
router.post('/updateEpfo', verifyToken, epfoController.updateEpfo);
router.post('/deleteEpfo', verifyToken, epfoController.deleteEpfo);

router.post('/createEpfoledger', verifyToken, epfoledgerController.createEpfoledger);
router.post('/getEpfoledgers', verifyToken, epfoledgerController.getEpfoledgers);
router.post('/getEpfoledgerById', verifyToken, epfoledgerController.getEpfoledgerById);
router.post('/updateEpfoledger', verifyToken, epfoledgerController.updateEpfoledger);
router.post('/deleteEpfoledger', verifyToken, epfoledgerController.deleteEpfoledger);

router.post('/createException', verifyToken, exceptionController.createException);
router.post('/getExceptions', verifyToken, exceptionController.getExceptions);
router.post('/getExceptionById', verifyToken, exceptionController.getExceptionById);
router.post('/updateException', verifyToken, exceptionController.updateException);
router.post('/deleteException', verifyToken, exceptionController.deleteException);

router.post('/createFundrequest', verifyToken, fundrequestController.createFundRequest);
router.post('/getFundrequest', verifyToken, fundrequestController.getFundRequests);
router.post('/getFundrequestById', verifyToken, fundrequestController.getFundRequestById);
router.post('/updateFundrequest', verifyToken, fundrequestController.updateFundRequest);
router.post('/deleteFundrequest', verifyToken, fundrequestController.deleteFundRequest);

router.post('/createGallery', verifyToken, galleryController.createGallery);
router.post('/getGalleries', verifyToken, galleryController.getGalleries);
router.post('/getGalleryById', verifyToken, galleryController.getGalleryById);
router.post('/updateGallery', verifyToken, galleryController.updateGallery);
router.post('/deleteGallery', verifyToken, galleryController.deleteGallery);

router.post('/createGstregistration', verifyToken, gstregistrationController.createGstregistration);
router.post('/getGstregistrations', verifyToken, gstregistrationController.getGstregistrations);
router.post('/getGstregistrationById', verifyToken, gstregistrationController.getGstregistrationById);
router.post('/updateGstregistration', verifyToken, gstregistrationController.updateGstregistration);
router.post('/deleteGstRegistration', verifyToken, gstregistrationController.deleteGstRegistration);

router.post('/createIdmaster', verifyToken, idMasterController.createIdmaster);
router.post('/getIdmasters', verifyToken, idMasterController.getIdmasters);
router.post('/getIdmasterById', verifyToken, idMasterController.getIdmasterById);
router.post('/updateIdmaster', verifyToken, idMasterController.updateIdmaster);
router.post('/deleteIdmaster', verifyToken, idMasterController.deleteIdmaster);

router.post('/createIdRequest', verifyToken, idRequestController.createIdRequest);
router.post('/getIdRequests', verifyToken, idRequestController.getIdRequests);
router.post('/getIdRequestById', verifyToken, idRequestController.getIdRequestsById);
router.post('/updateIdRequest', verifyToken, idRequestController.updateIdRequest);
router.post('/deleteIdRequest', verifyToken, idRequestController.deleteIdRequest);

router.post('/createItr', verifyToken, itrController.createItr);
router.post('/getItrs', verifyToken, itrController.getItrs);
router.post('/getItrById', verifyToken, itrController.getItrById);
router.post('/updateItr', verifyToken, itrController.updateItr);
router.post('/deleteItr', verifyToken, itrController.deleteItr);

router.post('/createItrLedger', verifyToken, itrLedgerController.createItrLedger);
router.post('/getItrLedgers', verifyToken, itrLedgerController.getItrLedgers);
router.post('/getItrLedgerById', verifyToken, itrLedgerController.getItrLedgerById);
router.post('/updateItrLedger', verifyToken, itrLedgerController.updateItrLedger);
router.post('/deleteItrLedger', verifyToken, itrLedgerController.deleteItrLedger);

router.post('/createLoginhistory', verifyToken, loginHistoryController.createLoginhistory);
router.post('/getLoginhistories', verifyToken, loginHistoryController.getLoginhistories);
router.post('/getLoginhistoryById', verifyToken, loginHistoryController.getLoginhistoryById);
router.post('/updateLoginhistory', verifyToken, loginHistoryController.updateLoginhistory);
router.post('/deleteLoginhistory', verifyToken, loginHistoryController.deleteLoginhistory);

// For gstledgerController
router.post('/createGstledger', verifyToken, gstledgerController.createGstledger);
router.post('/getGstledgers', verifyToken, gstledgerController.getGstledgers);
router.post('/getGstledgerById', verifyToken, gstledgerController.getGstledgerById);
router.post('/updateGstledger', verifyToken, gstledgerController.updateGstledger);
router.post('/deleteGstledger', verifyToken, gstledgerController.deleteGstledger);

// For mainWalletLedgerController
router.post('/createMainwalletledger', verifyToken, mainWalletLedgerController.createMainwalletledger);
router.post('/getMainwalletledgers', verifyToken, mainWalletLedgerController.getMainwalletledger);
router.post('/getMainwalletledgerById', verifyToken, mainWalletLedgerController.getMainwalletledgerById);
router.post('/updateMainwalletledger', verifyToken, mainWalletLedgerController.updateMainwalletledger);
router.post('/deleteMainwalletledger', verifyToken, mainWalletLedgerController.deleteMainwalletledger);

// For messageSettingController
router.post('/createMessagesetting', verifyToken, messageSettingController.createMessagesetting);
router.post('/getMessagesettings', verifyToken, messageSettingController.getMessagesettings);
router.post('/getMessagesettingById', verifyToken, messageSettingController.getMessagesettingById);
router.post('/updateMessagesetting', verifyToken, messageSettingController.updateMessagesetting);
router.post('/deleteMessagesetting', verifyToken, messageSettingController.deleteMessagesetting);

// For newsEventController
router.post('/createNewsevent', verifyToken, newsEventController.createNewsevent);
router.post('/getNewsevents', verifyToken, newsEventController.getNewsevents);
router.post('/getNewseventById', verifyToken, newsEventController.getNewseventById);
router.post('/updateNewsevent', verifyToken, newsEventController.updateNewsevent);
router.post('/deleteNewsevent', verifyToken, newsEventController.deleteNewsevent);

// For orderController
router.post('/createOrder', verifyToken, orderController.createOrder);
router.post('/getOrders', verifyToken, orderController.getOrders);
router.post('/getOrderById', verifyToken, orderController.getOrderById);
router.post('/updateOrder', verifyToken, orderController.updateOrder);
router.post('/deleteOrder', verifyToken, orderController.deleteOrder);

// For panLedgerController
router.post('/createPanledger', verifyToken, panLedgerController.createPanledger);
router.post('/getPanledgers', verifyToken, panLedgerController.getPanledgers);
router.post('/getPanledgerById', verifyToken, panLedgerController.getPanledgerById);
router.post('/updatePanledger', verifyToken, panLedgerController.updatePanledger);
router.post('/deletePanledger', verifyToken, panLedgerController.deletePanledger);

// For panTokenController
router.post('/createPantoken', verifyToken, panTokenController.createPantoken);
router.post('/getPantokens', verifyToken, panTokenController.getPantokens);
router.post('/getPantokenById', verifyToken, panTokenController.getPantokenById);
router.post('/updatePantoken', verifyToken, panTokenController.updatePantoken);
router.post('/deletePantoken', verifyToken, panTokenController.deletePantoken);

// For payoutSurchargeController
router.post('/createPayoutsurcharge', verifyToken, payoutSurchargeController.createPayoutsurcharge);
router.post('/getPayoutsurcharges', verifyToken, payoutSurchargeController.getPayoutsurcharges);
router.post('/getPayoutsurchargeById', verifyToken, payoutSurchargeController.getPayoutsurchargeById);
router.post('/updatePayoutsurcharge', verifyToken, payoutSurchargeController.updatePayoutsurcharge);
router.post('/deletePayoutsurcharge', verifyToken, payoutSurchargeController.deletePayoutsurcharge);

// For productController
router.post('/createProduct', verifyToken, productController.createProduct);
router.post('/getProducts', verifyToken, productController.getProducts);
router.post('/getProductById', verifyToken, productController.getProductById);
router.post('/updateProduct', verifyToken, productController.updateProduct);
router.post('/deleteProduct', verifyToken, productController.deleteProduct);

// For selfBankController
router.post('/createSelfbank', verifyToken, selfBankController.createSelfbank);
router.post('/getSelfbanks', verifyToken, selfBankController.getSelfbanks);
router.post('/getSelfbankById', verifyToken, selfBankController.getSelfbankById);
router.post('/updateSelfbank', verifyToken, selfBankController.updateSelfbank);
router.post('/deleteSelfbank', verifyToken, selfBankController.deleteSelfbank);

// For serviceController
router.post('/createService', verifyToken, serviceController.createService);
router.post('/getServices', verifyToken, serviceController.getServices);
router.post('/getServiceById', verifyToken, serviceController.getServiceById);
router.post('/updateService', verifyToken, serviceController.updateService);
router.post('/deleteService', verifyToken, serviceController.deleteService);

// For stateController
router.post('/createState', verifyToken, stateController.createState);
router.post('/getStates', verifyToken, stateController.getStates);
router.post('/getStateById', verifyToken, stateController.getStateById);
router.post('/updateState', verifyToken, stateController.updateState);
router.post('/deleteState', verifyToken, stateController.deleteState);

// For ticketController
router.post('/createTicket', verifyToken, ticketController.createTicket);
router.post('/getTickets', verifyToken, ticketController.getTickets);
router.post('/getTicketById', verifyToken, ticketController.getTicketById);
router.post('/updateTicket', verifyToken, ticketController.updateTicket);
router.post('/deleteTicket', verifyToken, ticketController.deleteTicket);

// For walletPinController
router.post('/createWalletpin', verifyToken, walletPinController.createWalletpin);
router.post('/getWalletpins', verifyToken, walletPinController.getWalletpins);
router.post('/getWalletpinById', verifyToken, walletPinController.getWalletpinById);
router.post('/updateWalletpin', verifyToken, walletPinController.updateWalletpin);
router.post('/deleteWalletpin', verifyToken, walletPinController.deleteWalletpin);


// Check if all controllers are defined
const controllers = {
    documentController,
    authorizationController,
    memberController,
    aepscomissionController,
    aepswalletController,
    balanceController,
    bankController,
    bankSettingController,
    companyController,
    contactusController,
    districtController,
    dmrsController,
    employeeController,
    epfoController,
    epfoledgerController,
    exceptionController,
    fundrequestController,
    galleryController,
    gstledgerController,
    gstregistrationController,
    idMasterController,
    idRequestController,
    itrController,
    itrLedgerController,
    loginHistoryController,
    mainWalletLedgerController,
    messageSettingController,
    newsEventController,
    orderController,
    panLedgerController,
    panTokenController,
    payoutSurchargeController,
    productController,
    selfBankController,
    serviceController,
    stateController,
    ticketController,
    walletPinController
};
module.exports = router;

