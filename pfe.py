# -*- coding: utf-8 -*-
"""PFE.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1n87rnEW7yCVPp6G15oEvKpPSBEd8Iw1f
"""

# Commented out IPython magic to ensure Python compatibility.
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.linear_model import SGDClassifier
from sklearn.metrics import confusion_matrix, classification_report
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.model_selection import train_test_split, GridSearchCV, cross_val_score
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error, mean_absolute_error,r2_score
import keras
import matplotlib.image as mpimg
import matplotlib.pyplot as plt
import math
import tensorflow as tf
from keras.models import Sequential
from keras.layers import Dense
# %matplotlib inline

Patients = pd.read_csv('matTab.csv', sep=';')

Patients.head(5)

Patients.info()

bins = (2, 6.5, 8)
group_names = ['VIVRE', 'MORT']
Patients['SurvieGlobale'] = pd.cut(Patients['SurvieGlobale'], bins = bins, labels = group_names)
label_quality = LabelEncoder()
Patients['SurvieGlobale'] = label_quality.fit_transform(Patients['SurvieGlobale'])
Patients['SurvieGlobale'].value_counts()

y = Patients['SurvieGlobale']
X = Patients.drop(['SurvieGlobale'], axis = 1)
X.head()

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2,random_state = 42)

model = Sequential()
model.add(Dense(8, input_dim=11, activation='relu'))
model.add(Dense(4, activation='relu'))
model.add(Dense(1, activation='sigmoid'))

model.compile(optimizer="Adam",loss='mse' , metrics=['accuracy','Precision','Recall'])

model.summary()

history = model.fit(X_train, y_train,validation_data=[X_test, y_test], epochs=100, batch_size=32)

plt.title('Loss')
plt.plot(history.history['loss'], label='train')
plt.plot(history.history['val_loss'], label='test')
plt.legend()

plt.title('Accuracy')
plt.plot(history.history['accuracy'], label='train')
plt.plot(history.history['val_accuracy'], label='test')
plt.legend()
plt.show()

plt.title('recall')
plt.plot(history.history['recall'], label='train')
plt.plot(history.history['val_recall'], label='test')
plt.legend()

plt.title('precision')
plt.plot(history.history['precision'], label='train')
plt.plot(history.history['val_precision'], label='test')
plt.legend()