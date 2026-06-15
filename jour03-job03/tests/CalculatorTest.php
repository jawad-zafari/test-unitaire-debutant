<?php

use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../calculator.php';

class CalculatorTest extends TestCase {
    private $calculator;

    protected function setUp(): void {
        $this->calculator = new Calculator();
    }

    public function testAddition() {
        $this->assertEquals(5, $this->calculator->calculate('2+3'));
    }

    public function testSoustraction() {
        $this->assertEquals(5, $this->calculator->calculate('8-3'));
    }

    public function testMultiplication() {
        $this->assertEquals(12, $this->calculator->calculate('3*4'));
    }

    public function testDivision() {
        $this->assertEquals(3, $this->calculator->calculate('15/5'));
    }

    public function testDivisionParZero() {
        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage("Erreur de calcul");
        $this->calculator->calculate('10/0');
    }

    // Section Points
    public function testChaineVide() {
        $this->expectException(RuntimeException::class);
        $this->calculator->calculate('');
    }
}