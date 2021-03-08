import apply from "../common/page-objects/apply-page.po";
import careers from "../common/page-objects/careers.po";
import offerDetail from "../common/page-objects/offer-detail-page.po";
import pageAction from "../common/page-action";

describe("Sending application Test Suite", () => {
  const dateNow: number = Date.now();
  const jobTitle = "QA/Test Engineer (Automation)";
  const fullName = `e2e FullName`;
  const email = `e2e@email.com`;
  const phone = `123456`;
  const currentCompany = `e2e CurrentCompany`;
  const salaryExpectation = `${dateNow}`;
  const cvPath = "CV_test.txt";
  const validationMsg =
    "✱ Please verify that you are not a robot, and reupload any files.";

  pageAction
    .loadBaseUrl()
    .assertTextInElement(jobTitle, () => careers.jobOffer)
    .act("go to QA job offer details page", () => careers.clickQaOfferButton())
    .act("go to submit application page", () => offerDetail.clickApplyButton())

    .act("click attach CV", () => apply.clickAttachCV())
    .act("choose CV", () => apply.chooseCV(cvPath))
    .waitForElementVisible("wait for uploading CV", () => apply.successIcon)
    .act("type name", () => apply.typeFullName(fullName))
    .act("type email", () => apply.typeEmail(email))
    .act("type phone", () => apply.typePhone(phone))
    .act("type current company", () => apply.typeCurrentCompany(currentCompany))
    .act("type salary expectation", () =>
      apply.typeSalaryExpectation(salaryExpectation)
    )
    .act("click on captcha", () => apply.clickCaptcha())
    .act("click on submit button", () => apply.clickSubmitButton())
    .assertTextInElement(validationMsg, () => apply.validationMsg);
});
