Feature: 360 Component

  Scenario: The user rotates the vehicle
    Given the component has had images authored
    When a user swipes the vehicle image to the left
    Then the vehicle image is rotated to the left with no inertia