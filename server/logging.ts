import {Category, CategoryConfiguration, CategoryServiceFactory, LogLevel} from 'typescript-logging';

CategoryServiceFactory.setDefaultConfiguration(new CategoryConfiguration(LogLevel.fromString(process.env.LOG_LEVEL || 'warn')));

// Create categories, they will autoregister themselves, one category without parent (root) and a child category.
export const catSystem = new Category('system');
export const catController = new Category('controller', catSystem);
