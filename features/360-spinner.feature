Feature: Simple maths

  In order to allow users to fully view a vehicle
  As a car shopper on audiusa.com
  I want to be able to see vehicles from all angles

  Scenario: The user rotates the vehicle
    Given the component has had images authored
    When a user swipes the vehicle image to the left
    Then the vehicle image is rotated to the left with no inertia