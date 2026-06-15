<?php

use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../calculator.php';

class CalculatorTest extends TestCase {
    private $calculator;

    protected function setUp(): void {
        $this->calculator = new Calculator();
    }

    
}