import LoginFunctions from '../../functions/LoginFunctions';
import SurveyConfigurationFunctions from '../../functions/SurveyConfigurationFunctions';

describe('Automated Tests for Survey Configurations', () => {
  const loginFunctions = new LoginFunctions();
  const surveyConfigurationFunctions = new SurveyConfigurationFunctions();

  beforeEach(() => {
    loginFunctions.login_as_admin();
    cy.visit(Cypress.env('baseUrl'));
  });

  it('Verifies author information stays hidden', () => {
    surveyConfigurationFunctions.hide_author_information_and_verify();
  });

  it('Verifies exact time information is hidden', () => {
    surveyConfigurationFunctions.hide_exact_time_information_and_verify();
  });

  it('Verify post exact location information is hidden', () => {
    surveyConfigurationFunctions.hide_exact_location_information_and_verify();
  });
});
