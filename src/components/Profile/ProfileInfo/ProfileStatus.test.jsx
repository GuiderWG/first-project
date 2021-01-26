import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('Profile status component', () => {
  test('status from props', () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('SUBSCRIBE TO BASIC');
  });
  
  test('find span', () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
    const root = component.root;
    const span = root.findByType('span');
    expect(span).not.toBeNull();
  });
  
  test('find input', () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
    const root = component.root;
    
    expect(() => {
        const input = root.findByType('input');
      }
    ).toThrow();
  });
  
  test('find span child', () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
    const root = component.root;
    const span = root.findByType('span');
    expect(span.children[0]).toBe('SUBSCRIBE TO BASIC');
  });
});