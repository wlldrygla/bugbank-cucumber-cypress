Feature: Register on Bug Bank
 
  Scenario: User registers on the bank website
    Given the user is on the bank website registration page
    When the user fills out the registration form with valid information and submits the form
    Then the user should receive a confirmation message